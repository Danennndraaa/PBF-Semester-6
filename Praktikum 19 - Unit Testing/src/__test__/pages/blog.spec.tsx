import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { useRouter } from 'next/router';
import BlogPost from '@/pages/blog/[slug]';

// Memalsukan (mock) fungsi useRouter bawaan Next.js
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('Halaman Detail Blog', () => {
  it('harus merender judul dan slug dari URL dengan benar', () => {
    // 1. Mensimulasikan URL dengan query parameter slug = "belajar-nextjs"
    (useRouter as jest.Mock).mockReturnValue({
      query: { slug: 'belajar-nextjs' },
    });

    // 2. Render komponen
    render(<BlogPost />);

    // 3. Memeriksa elemen yang tampil
    expect(screen.getByRole('heading', { level: 1, name: /Halaman Detail Blog/i })).toBeInTheDocument();
    
    // Pastikan nilai "belajar-nextjs" tampil di layar
    expect(screen.getByText('belajar-nextjs')).toBeInTheDocument();
  });
});