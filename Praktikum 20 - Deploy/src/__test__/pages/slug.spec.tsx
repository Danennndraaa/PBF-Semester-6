import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { useRouter } from 'next/router';
import HalamanToko from '@/../src/pages/shop/[[...slug]]';

// Mock useRouter
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('Halaman Toko (Optional Catch-all Route)', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('harus merender nilai default jika URL tidak memiliki parameter (slug kosong)', () => {
    // Simulasi user mengakses /shop saja (tanpa slug)
    (useRouter as jest.Mock).mockReturnValue({
      query: {},
    });

    render(<HalamanToko />);

    // Cek keberadaan elemen
    expect(screen.getByRole('heading', { level: 1, name: 'Halaman Toko' })).toBeInTheDocument();
    
    // Cek fallback teks "Semua Kategori" dari logic ternary
    expect(screen.getByText(/Kategori: Semua Kategori/i)).toBeInTheDocument();
    
    // Karena template literal `${undefined}` akan mencetak string "undefined" di React, kita bisa cek seperti ini:
    expect(screen.getByText(/Toko: undefined/i)).toBeInTheDocument();
  });

  it('harus merender nilai slug jika URL memiliki parameter', () => {
    // Simulasi user mengakses /shop/elektronik/laptop
    (useRouter as jest.Mock).mockReturnValue({
      query: { slug: ['elektronik', 'laptop'] },
    });

    render(<HalamanToko />);

    // Logic query.slug[0] + "-" + query.slug[1]
    expect(screen.getByText(/Toko: elektronik-laptop/i)).toBeInTheDocument();
    
    // Logic query.slug[0]
    expect(screen.getByText(/Kategori: elektronik/i)).toBeInTheDocument();
  });
});