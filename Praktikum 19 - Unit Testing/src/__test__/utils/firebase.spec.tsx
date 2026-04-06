import { initializeApp } from 'firebase/app';
import app from '@/../src/utils/db/firebase';

// Mock modul firebase/app
jest.mock('firebase/app', () => ({
  initializeApp: jest.fn(() => ({ name: '[DEFAULT]' })),
}));

describe('Firebase Config', () => {
  it('harus memanggil initializeApp dengan benar', () => {
    expect(initializeApp).toHaveBeenCalled();
    expect(app).toBeDefined();
  });
});