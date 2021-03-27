import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Search from './Search';
import { Provider } from 'react-redux';
import { store } from '../store';

jest.mock('../services/api/weather');

describe('Search component', () => {
  it('should show city input', () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('should run on change function', () => {
    const onChangeSpy = jest.fn();
    render(
      <Provider store={store}>
        <Search onChange={onChangeSpy} />
      </Provider>
    );

    const input = screen.getByRole('textbox');
    expect(onChangeSpy).not.toBeCalled();

    fireEvent.change(input, { target: { value: 'test' } });

    expect(onChangeSpy).toBeCalled();
  });

  it('should call on press function when press enter', () => {
    const onKeyPressSpy = jest.fn();
    render(
      <Provider store={store}>
        <Search onKeyPress={onKeyPressSpy} />
      </Provider>
    );

    const input = screen.getByRole('textbox');
    expect(onKeyPressSpy).not.toBeCalled();
    fireEvent.focus(input);
    fireEvent.keyPress(input, { key: 'Enter', code: 'Enter', charCode: 13 });

    expect(onKeyPressSpy).toBeCalled();
  });
});
