import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import EditProfile from '@/../src/pages/profile/edit';

describe('Halaman Edit Profile', () => {
  it('harus merender judul dan teks deskripsi dengan benar', () => {
    render(<EditProfile />);

    // Cek elemen h1
    const heading = screen.getByRole('heading', { level: 1, name: /Edit Profile/i });
    expect(heading).toBeInTheDocument();

    // Cek elemen p
    const paragraph = screen.getByText(/Ini adalah halaman untuk mengedit data profil./i);
    expect(paragraph).toBeInTheDocument();
  });
});