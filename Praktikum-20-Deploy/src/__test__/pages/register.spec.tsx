import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import HalamanRegister from '@/pages/auth/register';

// Memalsukan (mock) komponen dari folder views
jest.mock('../../views/auth/register', () => {
  return function MockTampilanRegister() {
    return <div data-testid="mock-tampilan-register">Tampilan Register Mock</div>;
  };
});

describe('Halaman Register', () => {
  it('harus merender komponen TampilanRegister dengan benar', () => {
    render(<HalamanRegister />);
    
    // Memastikan wrapper memanggil komponen TampilanRegister
    const mockView = screen.getByTestId('mock-tampilan-register');
    expect(mockView).toBeInTheDocument();
  });
});