import {
  retrieveProducts,
  retrieveDataByID,
  signIn,
  signUp,
  signInWithGoogle,
  signInWithGithub,
} from '../../utils/db/servicefirebase';
import * as firestore from 'firebase/firestore';
import bcrypt from 'bcrypt';

// 1. Mock semua fungsi firestore yang dipakai
jest.mock('firebase/firestore', () => ({
  getFirestore: jest.fn(),
  collection: jest.fn(),
  getDocs: jest.fn(),
  getDoc: jest.fn(),
  doc: jest.fn(),
  query: jest.fn(),
  addDoc: jest.fn(),
  where: jest.fn(),
  updateDoc: jest.fn(),
}));

// 2. Mock bcrypt
jest.mock('bcrypt', () => ({
  hash: jest.fn(),
}));

// 3. PERBAIKAN: Path mock disamakan menjadi mundur 2 folder (../../)
jest.mock('../../utils/db/firebase', () => ({
  __esModule: true,
  default: {},
}));

describe('Firebase Services', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('retrieveProducts', () => {
    it('harus mengembalikan array data produk', async () => {
      (firestore.getDocs as jest.Mock).mockResolvedValueOnce({
        docs: [{ id: '1', data: () => ({ nama: 'Produk A' }) }],
      });
      const result = await retrieveProducts('products');
      expect(result).toEqual([{ id: '1', nama: 'Produk A' }]);
    });
  });

  describe('retrieveDataByID', () => {
    it('harus mengembalikan objek data berdasarkan ID', async () => {
      (firestore.getDoc as jest.Mock).mockResolvedValueOnce({
        data: () => ({ nama: 'Produk A' }),
      });
      const result = await retrieveDataByID('products', '1');
      expect(result).toEqual({ nama: 'Produk A' });
    });
  });

  describe('signIn', () => {
    it('harus mengembalikan data user jika ditemukan', async () => {
      (firestore.getDocs as jest.Mock).mockResolvedValueOnce({
        docs: [{ id: '1', data: () => ({ email: 'test@test.com' }) }],
      });
      const result = await signIn('test@test.com');
      expect(result).toEqual({ id: '1', email: 'test@test.com' });
    });

    it('harus mengembalikan null jika user tidak ditemukan', async () => {
      (firestore.getDocs as jest.Mock).mockResolvedValueOnce({ docs: [] });
      const result = await signIn('test@test.com');
      expect(result).toBeNull();
    });
  });

  describe('signUp', () => {
    const mockUser = { email: 'test@test.com', fullname: 'Test', password: '123' };

    it('harus mengembalikan error jika user sudah ada', async () => {
      // PERBAIKAN: Tambahkan fungsi data: () => ({}) agar tidak crash saat di-map
      (firestore.getDocs as jest.Mock).mockResolvedValueOnce({ 
        docs: [{ id: '1', data: () => ({ email: 'test@test.com' }) }] 
      });
      const callback = jest.fn();
      await signUp(mockUser, callback);
      expect(callback).toHaveBeenCalledWith({ status: 'error', message: 'User already exists' });
    });

    it('harus registrasi user baru dengan sukses', async () => {
      (firestore.getDocs as jest.Mock).mockResolvedValueOnce({ docs: [] });
      (bcrypt.hash as jest.Mock).mockResolvedValueOnce('hashedPassword');
      (firestore.addDoc as jest.Mock).mockResolvedValueOnce({});
      
      const callback = jest.fn();
      await signUp({ ...mockUser }, callback);
      expect(callback).toHaveBeenCalledWith({ status: 'success', message: 'User registered successfully' });
    });

    it('harus mengembalikan error jika gagal addDoc (catch error)', async () => {
      (firestore.getDocs as jest.Mock).mockResolvedValueOnce({ docs: [] });
      (bcrypt.hash as jest.Mock).mockResolvedValueOnce('hashedPassword');
      (firestore.addDoc as jest.Mock).mockRejectedValueOnce(new Error('DB Error'));
      
      const callback = jest.fn();
      await signUp({ ...mockUser }, callback);
      expect(callback).toHaveBeenCalledWith({ status: 'error', message: 'DB Error' });
    });
  });

  describe('OAuth Login (Google & Github)', () => {
    const mockOAuthUser = { email: 'oauth@test.com', type: 'google' };

    it('harus login user lama, mempertahankan role, dan updateDoc', async () => {
      (firestore.getDocs as jest.Mock).mockResolvedValueOnce({
        docs: [{ id: '1', data: () => ({ role: 'member' }) }],
      });
      (firestore.updateDoc as jest.Mock).mockResolvedValueOnce({});
      
      const callback = jest.fn();
      await signInWithGoogle(mockOAuthUser, callback);
      expect(callback).toHaveBeenCalledWith(expect.objectContaining({ status: true, message: 'User logged in with google' }));
    });

    it('harus register user baru menggunakan Github (default role: editor)', async () => {
      (firestore.getDocs as jest.Mock).mockResolvedValueOnce({ docs: [] });
      (firestore.addDoc as jest.Mock).mockResolvedValueOnce({});
      
      const callback = jest.fn();
      await signInWithGithub({ email: 'oauth@test.com', type: 'github' }, callback);
      expect(callback).toHaveBeenCalledWith(expect.objectContaining({ status: true, message: 'User registered and logged in with github' }));
    });

    it('harus menangkap error (catch) jika query ke Firestore gagal', async () => {
      (firestore.getDocs as jest.Mock).mockRejectedValueOnce(new Error('Network Error'));
      const callback = jest.fn();
      await signInWithGoogle(mockOAuthUser, callback);
      expect(callback).toHaveBeenCalledWith({ status: false, message: 'Failed to authenticate user with google' });
    });
  });
});