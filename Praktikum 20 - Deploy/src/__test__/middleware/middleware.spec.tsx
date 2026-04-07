import { NextRequest, NextResponse } from 'next/server';

// 1. Mock Next Server
jest.mock('next/server', () => ({
  NextResponse: {
    next: jest.fn().mockReturnValue('mocked-next-response'),
  },
}));

// 2. Mock withAuth yang sangat sederhana
jest.mock('../../Middleware/withAuth', () => jest.fn((mw, paths) => ({ mw, paths })));

describe('Main Middleware', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('harus mengeksekusi seluruh statement di level module tanpa sisa', () => {
    // KUNCI UTAMA: Mengisolasi modul agar file dievaluasi ulang sepenuhnya di dalam test
    jest.isolateModules(() => {
      // Import secara dinamis (require) di dalam isolateModules
      const middlewareModule = require('../../middleware');
      const withAuthMock = require('../../Middleware/withAuth');

      // 1. Test eksekusi MainMiddleware
      const req = {} as NextRequest;
      const res = middlewareModule.MainMiddleware(req);
      
      expect(NextResponse.next).toHaveBeenCalled();
      expect(res).toBe('mocked-next-response');

      // 2. Test eksekusi statement export default
      expect(withAuthMock).toHaveBeenCalledWith(
        middlewareModule.MainMiddleware, 
        ["/profile", "/admin", "/editor"]
      );
      
      // 3. Pastikan hasil dari export default benar
      expect(middlewareModule.default).toEqual({
        mw: middlewareModule.MainMiddleware,
        paths: ["/profile", "/admin", "/editor"]
      });
    });
  });
});