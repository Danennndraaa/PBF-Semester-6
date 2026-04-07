import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import HalamanAdmin from '@/pages/admin';

describe('Halaman Admin', () => {
  it('harus merender judul h1 dan teks dengan benar', () => {
    render(<HalamanAdmin />);

    // Memeriksa keberadaan elemen h1
    const heading = screen.getByRole('heading', { level: 1, name: /Halaman Admin/i });
    expect(heading).toBeInTheDocument();

    // Memeriksa sebagian teks pada paragraf
    const paragraph = screen.getByText(/Selamat datang di halaman admin!/i);
    expect(paragraph).toBeInTheDocument();
  });
});