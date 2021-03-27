import React from 'react';
import { render, screen } from '@testing-library/react';
import DayInfo from './DayInfo';

describe('DayInfo component', () => {
  it('should show minimum and maximum temperatures', () => {
    const minimumTemp = '10';
    const maxTemp = '20';

    render(<DayInfo minimumTemp={minimumTemp} maximumTemp={maxTemp} />);

    expect(screen.getByText(`Min: ${minimumTemp}`)).toBeInTheDocument();
    expect(screen.getByText(`Max: ${maxTemp}`)).toBeInTheDocument();
  });

  it('should show icon', () => {
    const icon = 'icon_url';

    render(<DayInfo icon={icon} />);

    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('should show condition', () => {
    const condition = 'Condition Test';

    render(<DayInfo condition={condition} />);

    expect(screen.getByText(condition)).toBeInTheDocument();
  });

  it('should show day of week', () => {
    const dayOfWeek = '03/27/2021';
    const expectDay = 'Saturday';

    render(<DayInfo forecastDate={dayOfWeek} />);

    expect(screen.getByText(expectDay)).toBeInTheDocument();
  });
});
