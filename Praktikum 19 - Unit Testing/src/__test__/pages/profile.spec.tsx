import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import HalamanProfile from '@/../src/pages/profile/index';
import { useSession } from 'next-auth/react';

// Mock module next-auth/react
jest.mock('next-auth/react', () => ({
  useSession: jest.fn(),
}));

describe('Halaman Profile', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('harus merender nama user jika session tersedia (ter-login)', () => {
    // Memalsukan kondisi user sedang login dengan data fullname
    (useSession as jest.Mock).mockReturnValue({
      data: { user: { fullname: 'Budi Santoso' } },
      status: 'authenticated',
    });

    render(<HalamanProfile />);

    expect(screen.getByRole('heading', { level: 1, name: 'Halaman Profile' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1, name: 'Selamat Datang Budi Santoso' })).toBeInTheDocument();
  });

  it('harus merender tanpa nama jika data session kosong (tidak ter-login)', () => {
    // Memalsukan kondisi session kosong agar branch data?.user?.fullname juga ter-test
    (useSession as jest.Mock).mockReturnValue({
      data: null,
      status: 'unauthenticated',
    });

    render(<HalamanProfile />);

    // Hanya akan menampilkan "Selamat Datang " tanpa error
    expect(screen.getByRole('heading', { level: 1, name: 'Selamat Datang' })).toBeInTheDocument();
  });
});