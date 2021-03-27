import React from 'react';
import { render, screen } from '@testing-library/react';
import Error from './Error';

describe('Error component', () => {
  it('should show message', () => {
    const expectMessage = 'Sorry, the specified city was not found...';
    render(<Error />);
    expect(screen.getByText(expectMessage)).toBeInTheDocument();
  });
});
