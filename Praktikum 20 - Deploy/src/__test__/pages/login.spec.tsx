import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import HalamanLogin from '@/pages/auth/login';

// Memalsukan (mock) komponen dari folder views
jest.mock('../../views/auth/login', () => {
  return function MockTampilanLogin() {
    return <div data-testid="mock-tampilan-login">Tampilan Login Mock</div>;
  };
});

describe('Halaman Login', () => {
  it('harus merender komponen TampilanLogin dengan benar', () => {
    render(<HalamanLogin />);
    
    // Memastikan wrapper memanggil komponen TampilanLogin
    const mockView = screen.getByTestId('mock-tampilan-login');
    expect(mockView).toBeInTheDocument();
  });
});