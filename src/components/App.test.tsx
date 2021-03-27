import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { store } from '../store';

describe('App component', () => {
  it('should show app name and text input', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(screen.getByText('Weather Forecast App')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
