import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { useRouter } from 'next/router';
// PERBAIKAN: Mundur 4 tingkat untuk kembali ke folder src/
import Appshell from '../../components/layouts/Appshell/index';

// 1. Mock next/router
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

// 2. Mock next/font/google
jest.mock('next/font/google', () => ({
  Roboto: () => ({ className: 'mocked-roboto' }),
}));

// 3. Mock next/script
jest.mock('next/script', () => {
  return function MockScript() {
    return <div data-testid="mock-script" />;
  };
});

// 4. Mock komponen Navbar (mundur 4 tingkat juga)
jest.mock('../../components/layouts/navbar', () => {
  return function MockNavbar() {
    return <div data-testid="mock-navbar">Mock Navbar</div>;
  };
});

describe('Appshell Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('harus merender children dan Navbar jika path tidak di-disable', () => {
    (useRouter as jest.Mock).mockReturnValue({ pathname: '/home' });

    render(
      <Appshell>
        <div data-testid="mock-children">Konten Anak</div>
      </Appshell>
    );

    expect(screen.getByTestId('mock-children')).toBeInTheDocument();
    expect(screen.getByTestId('mock-navbar')).toBeInTheDocument();
  });

  it('TIDAK boleh merender Navbar jika path ada di dalam disableNavbar', () => {
    (useRouter as jest.Mock).mockReturnValue({ pathname: '/auth/login' });

    render(
      <Appshell>
        <div data-testid="mock-children">Konten Login</div>
      </Appshell>
    );

    expect(screen.getByTestId('mock-children')).toBeInTheDocument();
    expect(screen.queryByTestId('mock-navbar')).not.toBeInTheDocument();
  });
});