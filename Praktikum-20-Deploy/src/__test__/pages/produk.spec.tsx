import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
// PERBAIKAN: Import getServerSideProps, hapus import static yang lama
import HalamanProduk, { getServerSideProps } from '../../pages/produk/[produk]';

// Mock komponen view
jest.mock('../../views/DetailProduct', () => {
  return function MockDetailProduk() {
    return <div data-testid="mock-detail-produk">Mock Detail Produk</div>;
  };
});

describe('Halaman Produk (Dynamic SSR)', () => {
  // Simpan environment variable asli
  const originalEnv = process.env;

  beforeEach(() => {
    jest.clearAllMocks();
    global.fetch = jest.fn();
    
    // Mock environment variable khusus untuk test ini
    process.env = {
      ...originalEnv,
      NEXT_PUBLIC_API_URL: 'http://localhost:3000',
    };
  });

  afterAll(() => {
    // Kembalikan environment variable setelah test selesai
    process.env = originalEnv;
  });

  it('harus merender komponen HalamanProduk dengan benar', () => {
    const mockProduct: any = { id: '1', name: 'Sepatu' };
    render(<HalamanProduk product={mockProduct} />);
    
    expect(screen.getByTestId('mock-detail-produk')).toBeInTheDocument();
  });

  // PERBAIKAN: Test getServerSideProps, bukan getStaticProps
  it('getServerSideProps harus mengambil data dari API env dan mengembalikan props', async () => {
    const mockApiResponse = { data: { id: '1', name: 'Sepatu' } };
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockApiResponse),
    });

    const context = { params: { produk: '1' } };
    const result = await getServerSideProps(context);

    // Memastikan fetch dipanggil dengan gabungan ENV URL dan parameter
    expect(global.fetch).toHaveBeenCalledWith('http://localhost:3000/api/products/1');
    expect(result).toEqual({
      props: {
        product: mockApiResponse.data,
      },
    });
  });
});