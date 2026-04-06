import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '@/pages/index';

// 1. Mock modul next/font/google agar tidak menyebabkan error di Jest
jest.mock('next/font/google', () => ({
  Roboto: () => ({
    className: 'mocked-roboto-class',
  }),
}));

// 2. Mock next/head karena komponen Head seringkali tidak dirender murni di lingkungan jsdom
jest.mock('next/head', () => {
  return function Head({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
  };
});

describe('Home Page', () => {
  it('harus merender judul h1 dan teks paragraf dengan benar', () => {
    // Render komponen Home
    render(<Home />);

    // Memeriksa keberadaan elemen h1
    const heading = screen.getByRole('heading', {
      level: 1,
      name: 'Praktikum Next.js Implementasi Unit Testing pada Next.js menggunakan Jest'
    });
    expect(heading).toBeInTheDocument();

    // Memeriksa keberadaan elemen paragraf p
    const paragraph = screen.getByText('Mahasiswa D4 Pengembangan Web');
    expect(paragraph).toBeInTheDocument();
  });
});