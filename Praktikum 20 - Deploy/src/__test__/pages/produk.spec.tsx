import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import HalamanProduk, { getStaticPaths, getStaticProps } from '../../pages/produk/[produk]';

// Mock komponen view menggunakan relative path juga (dari src/__test__/pages ke src/views)
jest.mock('../../views/DetailProduct', () => {
  return function MockDetailProduk() {
    return <div data-testid="mock-detail-produk">Mock Detail Produk</div>;
  };
});

describe('Halaman Produk (Dynamic SSG)', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    global.fetch = jest.fn();
  });

  it('harus merender komponen HalamanProduk dengan benar', () => {
    const mockProduct: any = { id: '1', name: 'Sepatu' };
    render(<HalamanProduk product={mockProduct} />);
    
    expect(screen.getByTestId('mock-detail-produk')).toBeInTheDocument();
  });

  it('getStaticPaths harus mengembalikan paths yang benar', async () => {
    const mockApiResponse = { data: [{ id: '1' }, { id: '2' }] };
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockApiResponse),
    });

    const result = await getStaticPaths();

    expect(global.fetch).toHaveBeenCalledWith('http://localhost:3000/api/products');
    expect(result).toEqual({
      paths: [{ params: { produk: '1' } }, { params: { produk: '2' } }],
      fallback: false,
    });
  });

  it('getStaticProps harus mengembalikan data produk yang benar', async () => {
    const mockApiResponse = { data: { id: '1', name: 'Sepatu' } };
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockApiResponse),
    });

    const context = { params: { produk: '1' } };
    const result = await getStaticProps(context);

    expect(global.fetch).toHaveBeenCalledWith('http://localhost:3000/api/products/1');
    expect(result).toEqual({
      props: {
        product: mockApiResponse.data,
      },
    });
  });
});