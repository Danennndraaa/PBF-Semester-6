import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { useRouter } from 'next/router';
import CategoryPage from '@/pages/category/[...slug]';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('Halaman Kategori (Catch-all Route)', () => {
  // Membersihkan mock setiap sebelum test dijalankan
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('harus merender list segmen JIKA slug adalah array', () => {
    // Simulasi URL seperti: /category/elektronik/laptop
    (useRouter as jest.Mock).mockReturnValue({
      query: { slug: ['elektronik', 'laptop'] },
    });

    render(<CategoryPage />);
    
    expect(screen.getByRole('heading', { name: /Halaman Kategori/i })).toBeInTheDocument();
    expect(screen.getByText('elektronik')).toBeInTheDocument();
    expect(screen.getByText('laptop')).toBeInTheDocument();
  });

  it('harus merender tanpa error JIKA slug BUKAN array (Data kosong / undefined)', () => {
    // Simulasi URL baru diakses dan query belum siap (kosong)
    (useRouter as jest.Mock).mockReturnValue({
      query: {}, 
    });

    render(<CategoryPage />);
    
    // Heading harus tetap ada
    expect(screen.getByRole('heading', { name: /Halaman Kategori/i })).toBeInTheDocument();
    
    // List item (li) harusnya tidak ada karena array kosong []
    const listItems = screen.queryAllByRole('listitem');
    expect(listItems.length).toBe(0);
  });
});