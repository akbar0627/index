import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import CopyableAccountNumber from '.';

const BaseAccountNumber = 'abcdef123456';
const baseTestId = 'CopyableAccountNumber';

describe('CopyableAccountNumber', () => {
  it('renders without crashing', () => {
    render(<CopyableAccountNumber accountNumber={BaseAccountNumber} />);
    expect(screen.getByTestId(baseTestId)).toBeTruthy();
  });

  it('renders with customClassName Custom', () => {
    render(<CopyableAccountNumber className="Custom" accountNumber={BaseAccountNumber} />);
    expect(screen.getByTestId(baseTestId)).toHaveClass('Custom');
  });

  it('renders with Account Number Text', () => {
    render(<CopyableAccountNumber accountNumber={BaseAccountNumber} />);
    expect(screen.getByText('Account Number')).toBeTruthy();
  });

  it('renders with CopyableAccountNumber__label', () => {
    render(<CopyableAccountNumber accountNumber={BaseAccountNumber} />);
    expect(screen.getByText(BaseAccountNumber)).toBeTruthy();
  });

  it('renders copy div', () => {
    render(<CopyableAccountNumber accountNumber={BaseAccountNumber} />);
    expect(screen.getByText('Copy')).toBeTruthy();
  });

  it('renders icon', () => {
    render(<CopyableAccountNumber accountNumber={BaseAccountNumber} />);
    expect(screen.getByRole('img')).toBeTruthy();
    expect(screen.getByRole('img')).toHaveClass('Icon');
  });
});
