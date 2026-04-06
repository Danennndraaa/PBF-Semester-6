import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import HalamanProdukStatic, { getStaticProps } from '@/pages/produk/static';

// Mock komponen view
jest.mock('../../views/product', () => {
  return function MockTampilanProduk() {
    return <div data-testid="mock-tampilan-produk">Mock Tampilan Produk</div>;
  };
});

describe('Halaman Produk Static (SSG / ISR)', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    global.fetch = jest.fn();
  });

  it('harus merender heading dan komponen TampilanProduk dengan benar', () => {
    render(<HalamanProdukStatic products={[]} />);
    
    expect(screen.getByRole('heading', { level: 1, name: /Halaman Produk Static/i })).toBeInTheDocument();
    expect(screen.getByTestId('mock-tampilan-produk')).toBeInTheDocument();
  });

  it('getStaticProps harus mengambil data dari API, mengembalikan props, dan mengatur revalidate', async () => {
    // Simulasi respons API
    const mockApiResponse = { data: [{ id: '1', name: 'Celana' }] };
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockApiResponse),
    });

    const result = await getStaticProps();

    expect(global.fetch).toHaveBeenCalledWith('http://localhost:3000/api/produk');
    expect(result).toEqual({
      props: {
        products: mockApiResponse.data,
      },
      revalidate: 10,
    });
  });
});