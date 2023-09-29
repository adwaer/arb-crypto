import { render } from '@testing-library/react';

import Stock from './stock';

describe('Stock', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Stock />);
    expect(baseElement).toBeTruthy();
  });
});
