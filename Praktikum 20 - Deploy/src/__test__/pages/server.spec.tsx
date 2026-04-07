import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import HalamanProdukServer, { getServerSideProps } from '@/pages/produk/server';

// Mock komponen view
jest.mock('../../views/product', () => {
  return function MockTampilanProduk() {
    return <div data-testid="mock-tampilan-produk">Mock Tampilan Produk</div>;
  };
});

describe('Halaman Produk Server (SSR)', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    global.fetch = jest.fn();
  });

  it('harus merender heading dan komponen TampilanProduk dengan benar', () => {
    render(<HalamanProdukServer products={[]} />);
    
    expect(screen.getByRole('heading', { level: 1, name: /Halaman Produk Server/i })).toBeInTheDocument();
    expect(screen.getByTestId('mock-tampilan-produk')).toBeInTheDocument();
  });

  it('getServerSideProps harus mengambil data dari API dan mengembalikan props', async () => {
    // Simulasi respons API
    const mockApiResponse = { data: [{ id: '1', name: 'Baju' }] };
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockApiResponse),
    });

    const result = await getServerSideProps();

    expect(global.fetch).toHaveBeenCalledWith('http://localhost:3000/api/produk');
    expect(result).toEqual({
      props: {
        products: mockApiResponse.data,
      },
    });
  });
});