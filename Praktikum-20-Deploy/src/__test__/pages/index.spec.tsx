import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '../../pages/index';

// ... (abaikan mock bagian atas)

describe('Home Page', () => {
  it('harus merender judul h1 dan teks paragraf dengan benar', () => {
    render(<Home />);
    
    // PERBAIKAN: Sesuaikan judul dengan yang dirender di browser
    const heading = screen.getByRole('heading', {
      level: 1,
      name: 'Praktikum Next.js Pages Router' 
    });
    expect(heading).toBeInTheDocument();

    const paragraph = screen.getByText('Mahasiswa D4 Pengembangan Web');
    expect(paragraph).toBeInTheDocument();
  });
});