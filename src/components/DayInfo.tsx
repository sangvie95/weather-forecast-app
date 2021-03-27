import React from 'react';
import { Image, Card } from 'react-bootstrap';

interface DayInfoProps {
  forecastDate?: string;
  maximumTemp?: number | string;
  minimumTemp?: number | string;
  icon?: string;
  condition?: string;
}

const DayInfo: React.FC<DayInfoProps> = ({
  forecastDate,
  maximumTemp,
  minimumTemp,
  icon,
  condition,
}) => {
  const dayofWeek = forecastDate
    ? new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(
        new Date(`${forecastDate}`)
      )
    : '';

  return (
    <Card className="day-info">
      <Card.Body>
        <p className="bold">{dayofWeek}</p>

        {icon && <Image src={icon} rounded />}

        <p className="condition">{condition}</p>

        <p>Min: {minimumTemp}</p>
        <p>Max: {maximumTemp}</p>
      </Card.Body>
    </Card>
  );
};

export default DayInfo;
