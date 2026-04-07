import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import UserSettingPage from '@/../src/pages/user/index';

describe('User Setting Page', () => {
  it('harus merender teks dengan benar', () => {
    render(<UserSettingPage />);

    const textElement = screen.getByText(/User Setting Page/i);
    expect(textElement).toBeInTheDocument();
  });
});