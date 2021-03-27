import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { weatherActions } from '../reducers/weather';

interface SearchProps {
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const Search: React.FC<SearchProps> = ({ className, onChange, onKeyPress }) => {
  const [city, setCity] = useState('');
  const dispatch = useDispatch();

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCity(value);
    onChange && onChange(event);
  };

  const handleSearchButton = () => {
    dispatch(weatherActions.getWeatherForecast(city));
  };

  const handleOnKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearchButton();
      onKeyPress && onKeyPress(event);
    }
  };

  return (
    <div className={className}>
      <input
        id="search-city"
        className="search-city w-40"
        autoComplete="off"
        placeholder="Enter city"
        value={city}
        onChange={handleOnChange}
        onKeyPress={handleOnKeyPress}
      />
    </div>
  );
};

export default Search;
