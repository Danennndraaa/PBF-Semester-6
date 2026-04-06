import { render, screen, fireEvent } from '@testing-library/react';
import { useSession, signIn, signOut } from 'next-auth/react';
import Navbar from '../../components/layouts/navbar/index';

jest.mock('next-auth/react', () => ({
  useSession: jest.fn(),
  signIn: jest.fn(),
  signOut: jest.fn(),
}));

jest.mock('next/image', () => {
  return function MockImage({ alt }: { alt: string }) {
    return <img alt={alt} data-testid="mock-image" />;
  };
});

jest.mock('next/script', () => {
  return function MockScript() {
    return <div data-testid="mock-script" />;
  };
});

describe('Navbar Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('harus mengeksekusi signIn saat tombol Sign In diklik', () => {
    (useSession as jest.Mock).mockReturnValue({ data: null });
    render(<Navbar />);

    const signInBtn = screen.getByRole('button', { name: /Sign In/i });
    fireEvent.click(signInBtn); // Ini akan menghijaukan baris onClick signIn
    expect(signIn).toHaveBeenCalled();
  });

  it('harus mengeksekusi signOut saat tombol Sign Out diklik', () => {
    (useSession as jest.Mock).mockReturnValue({
      data: { user: { fullname: 'User' } },
    });
    render(<Navbar />);

    const signOutBtn = screen.getByRole('button', { name: /Sign Out/i });
    fireEvent.click(signOutBtn); // Ini akan menghijaukan baris onClick signOut
    expect(signOut).toHaveBeenCalled();
  });
});