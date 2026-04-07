import { NextRequest, NextResponse } from 'next/server';

// 1. Mock Next Server
jest.mock('next/server', () => ({
  NextResponse: {
    next: jest.fn().mockReturnValue('mocked-next-response'),
  },
}));

// 2. Mock withAuth yang sangat sederhana
jest.mock('../../Middleware/withAuth', () => jest.fn((mw, paths) => ({ mw, paths })));

describe('Proxy Middleware', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('harus mengeksekusi seluruh statement di level module tanpa sisa', () => {
    // KUNCI UTAMA: Mengisolasi modul agar file dievaluasi ulang sepenuhnya di dalam test
    jest.isolateModules(() => {
      // PERBAIKAN: Ubah import dinamis (require) ke file proxy yang baru
      const proxyModule = require('../../proxy');
      const withAuthMock = require('../../Middleware/withAuth');

      // 1. Test eksekusi MainMiddleware
      const req = {} as NextRequest;
      const res = proxyModule.MainMiddleware(req);
      
      expect(NextResponse.next).toHaveBeenCalled();
      expect(res).toBe('mocked-next-response');

      // 2. Test eksekusi statement export default
      expect(withAuthMock).toHaveBeenCalledWith(
        proxyModule.MainMiddleware, 
        ["/profile", "/admin", "/editor"]
      );
      
      // 3. Pastikan hasil dari export default benar
      expect(proxyModule.default).toEqual({
        mw: proxyModule.MainMiddleware,
        paths: ["/profile", "/admin", "/editor"]
      });
    });
  });
});