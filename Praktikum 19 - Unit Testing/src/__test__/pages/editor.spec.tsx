import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import HalamanEditor from '@/pages/editor/index';

describe('Halaman Editor', () => {
  it('harus merender judul h1 dan teks dengan benar', () => {
    render(<HalamanEditor />);

    // Memeriksa keberadaan elemen h1
    const heading = screen.getByRole('heading', { level: 1, name: /Halaman Editor/i });
    expect(heading).toBeInTheDocument();

    // Memeriksa sebagian teks pada paragraf
    const paragraph = screen.getByText(/Selamat datang di halaman Editor!/i);
    expect(paragraph).toBeInTheDocument();
  });
});