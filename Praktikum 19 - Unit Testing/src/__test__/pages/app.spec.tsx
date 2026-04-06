import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import AppSetting from '@/../src/pages/setting/app';

describe('Halaman App Setting', () => {
  it('harus merender teks App Setting Page dengan benar', () => {
    render(<AppSetting />);

    // Cek teks yang ada di dalam div
    const textElement = screen.getByText(/App Setting Page/i);
    expect(textElement).toBeInTheDocument();
  });
});