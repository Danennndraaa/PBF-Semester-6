import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import PasswordUserPage from '@/../src/pages/user/password/index';

describe('Password User Page', () => {
  it('harus merender teks dengan benar', () => {
    render(<PasswordUserPage />);

    const textElement = screen.getByText(/Password User Page/i);
    expect(textElement).toBeInTheDocument();
  });
});