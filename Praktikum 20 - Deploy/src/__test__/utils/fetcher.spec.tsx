import fetcher from '@/utils/swr/fetcher';

describe('SWR Fetcher', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('harus memanggil fetch dan mengembalikan data JSON', async () => {
    const mockData = { status: 'sukses' };
    const testUrl = 'https://api.contoh.com/data';

    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockData),
    }) as jest.Mock;

    const result = await fetcher(testUrl);

    expect(global.fetch).toHaveBeenCalledWith(testUrl);
    expect(result).toEqual(mockData);
  });
});