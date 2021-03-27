import React from 'react';
import { useSelector } from 'react-redux';
// components
import { Container, Row, Col } from 'react-bootstrap';
import Search from './Search';
import { RootState } from '../store';
import { isEmpty } from 'lodash';
import DayInfo from './DayInfo';
import Error from './Error';
// css
import './App.css';

const App: React.FC = () => {
  const forecast = useSelector((state: RootState) => state.weather.forecast);
  const isLoading = useSelector((state: RootState) => state.weather.loading);
  const isError = useSelector((state: RootState) => state.weather.error);

  return (
    <div className="App">
      {!isEmpty(forecast) && (
        <div className="logo-container">
          <h3>Weather Forecast App</h3>
        </div>
      )}

      <header className="App-header">
        {isEmpty(forecast) && (
          <h1 className="mb-64 color-black">Weather Forecast App</h1>
        )}

        <Search className="mb-16 w-100" />

        {isLoading && <p>Loading...</p>}

        <Container>
          <Row>
            {!isEmpty(forecast)
              ? forecast.forecast.forecastday.map((item: any) => (
                  <Col key={item.date_epoch} sm={4} md={4}>
                    <DayInfo
                      forecastDate={item.date}
                      minimumTemp={item.day.mintemp_c}
                      maximumTemp={item.day.maxtemp_c}
                      icon={item.day.condition.icon}
                      condition={item.day.condition.text}
                    />
                  </Col>
                ))
              : null}
          </Row>
        </Container>

        {isError && <Error />}
      </header>
    </div>
  );
};

export default App;
