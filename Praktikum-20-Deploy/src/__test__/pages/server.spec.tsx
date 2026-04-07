import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import HalamanProdukServer, { getServerSideProps } from '../../pages/produk/server';

describe('Halaman Produk Server (SSR)', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    jest.clearAllMocks();
    global.fetch = jest.fn();
    process.env = {
      ...originalEnv,
      NEXT_PUBLIC_API_URL: 'http://localhost:3000',
    };
  });

  afterAll(() => {
    process.env = originalEnv;
  });

  it('harus merender heading dan status kosong jika produk tidak ada', () => {
    render(<HalamanProdukServer products={[]} />);
    expect(screen.getByRole('heading', { level: 1, name: /Halaman Produk Server/i })).toBeInTheDocument();
    
    // PERBAIKAN: Kita cek teks aslinya, bukan elemen mock lagi
    expect(screen.getByText('Tidak ada produk yang tersedia.')).toBeInTheDocument();
  });

  it('getServerSideProps harus mengambil data dari API dan mengembalikan props', async () => {
    const mockApiResponse = { data: [{ id: '1', name: 'Produk 1' }] };
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockApiResponse),
    });

    const result = await getServerSideProps();

    expect(global.fetch).toHaveBeenCalledWith('http://localhost:3000/api/produk');
    expect(result).toEqual({
      props: { products: mockApiResponse.data },
    });
  });
});