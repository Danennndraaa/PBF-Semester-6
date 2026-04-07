import withAuth from '../../Middleware/withAuth';
import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

// Mock modul next-auth/jwt
jest.mock('next-auth/jwt', () => ({
  getToken: jest.fn(),
}));

// Mock NextRequest & NextResponse
jest.mock('next/server', () => ({
  NextResponse: {
    redirect: jest.fn(),
    next: jest.fn(),
  },
}));

describe('withAuth Middleware HOF', () => {
  let mockMiddleware: any;
  let mockNext: any;

  beforeEach(() => {
    jest.clearAllMocks();
    mockMiddleware = jest.fn().mockReturnValue('middleware-success');
    mockNext = jest.fn();
  });

  // Fungsi pembantu untuk membuat objek NextRequest palsu
  const createMockReq = (pathname: string, urlStr: string) => {
    return {
      nextUrl: { pathname },
      url: urlStr,
    } as any as NextRequest;
  };

  it('1. Harus langsung lanjut jika path tidak ada di requireAuth', async () => {
    const wrapped = withAuth(mockMiddleware, ['/admin']);
    const req = createMockReq('/public-page', 'http://localhost/public-page');
    
    const res = await wrapped(req, mockNext);

    expect(getToken).not.toHaveBeenCalled();
    expect(mockMiddleware).toHaveBeenCalledWith(req, mockNext);
    expect(res).toBe('middleware-success');
  });

  it('2. Harus redirect ke login jika path di requireAuth tapi tidak ada token', async () => {
    (getToken as jest.Mock).mockResolvedValueOnce(null);
    const wrapped = withAuth(mockMiddleware, ['/admin']);
    const req = createMockReq('/admin', 'http://localhost/admin');
    
    await wrapped(req, mockNext);

    expect(getToken).toHaveBeenCalled();
    expect(NextResponse.redirect).toHaveBeenCalled();
    
    // Cek apakah URL redirect mengarah ke halaman login yang benar
    const calledUrl = (NextResponse.redirect as jest.Mock).mock.calls[0][0];
    expect(calledUrl.pathname).toBe('/auth/login');
    expect(calledUrl.searchParams.get('callbackUrl')).toBe(encodeURI('http://localhost/admin'));
  });

  it('3. Harus redirect ke root (/) jika akses /admin tapi role BUKAN admin', async () => {
    (getToken as jest.Mock).mockResolvedValueOnce({ role: 'member' });
    const wrapped = withAuth(mockMiddleware, ['/admin']);
    const req = createMockReq('/admin', 'http://localhost/admin');

    await wrapped(req, mockNext);

    expect(NextResponse.redirect).toHaveBeenCalled();
    const calledUrl = (NextResponse.redirect as jest.Mock).mock.calls[0][0];
    expect(calledUrl.pathname).toBe('/');
  });

  it('4. Harus redirect ke root (/) jika akses /editor tapi role BUKAN editor', async () => {
    (getToken as jest.Mock).mockResolvedValueOnce({ role: 'member' });
    const wrapped = withAuth(mockMiddleware, ['/editor']);
    const req = createMockReq('/editor', 'http://localhost/editor');

    await wrapped(req, mockNext);

    expect(NextResponse.redirect).toHaveBeenCalled();
    const calledUrl = (NextResponse.redirect as jest.Mock).mock.calls[0][0];
    expect(calledUrl.pathname).toBe('/');
  });

  it('5. Harus mengizinkan akses ke /admin jika role adalah admin', async () => {
    (getToken as jest.Mock).mockResolvedValueOnce({ role: 'admin' });
    const wrapped = withAuth(mockMiddleware, ['/admin']);
    const req = createMockReq('/admin', 'http://localhost/admin');

    await wrapped(req, mockNext);

    expect(mockMiddleware).toHaveBeenCalledWith(req, mockNext);
  });

  it('6. Harus mengizinkan akses ke /editor jika role adalah editor', async () => {
    (getToken as jest.Mock).mockResolvedValueOnce({ role: 'editor' });
    const wrapped = withAuth(mockMiddleware, ['/editor']);
    const req = createMockReq('/editor', 'http://localhost/editor');

    await wrapped(req, mockNext);

    expect(mockMiddleware).toHaveBeenCalledWith(req, mockNext);
  });

  it('7. Harus mengizinkan akses ke /profile (bebas role) jika memiliki token', async () => {
    (getToken as jest.Mock).mockResolvedValueOnce({ role: 'member' });
    const wrapped = withAuth(mockMiddleware, ['/profile']);
    const req = createMockReq('/profile', 'http://localhost/profile');

    await wrapped(req, mockNext);

    expect(mockMiddleware).toHaveBeenCalledWith(req, mockNext);
  });

  it('8. Harus menggunakan array kosong jika requireAuth tidak dikirim (default parameter)', async () => {
    // Sengaja HANYA mengirim 1 parameter agar nilai default = [] tereksekusi
    const wrapped = withAuth(mockMiddleware); 
    const req = createMockReq('/public-page', 'http://localhost/public-page');

    await wrapped(req, mockNext);

    // Karena array kosong, path apapun tidak akan memicu pengecekan token
    expect(mockMiddleware).toHaveBeenCalledWith(req, mockNext);
  });

});


  