/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import CityCard from './CityCard.jsx';
import ControllButtons from './ControllButtons.jsx';
import CityCardHumidity from './CityCardHumidity.jsx';
import '../styles/CityWeatherContainer.css';
import { unixTimeConverter } from '../utils/functions.jsx';

const CityWeatherContainer = ({ data }) => {
  const { city, list } = data;

  return (
    <Container fluid='xl' className='CityWeatherContainer'>
      <Container fluid='lg'>
        <Row>
          <Col>
            <h3>{`${city.name}, ${city.country}`}</h3>
            <p>{`${list[0].weather[0].main} (${list[0].weather[0].description})`} </p>
            <p><i className="wi wi-barometer" /> : {`${list[0].pressure} hPa`}</p>
            <p><i className="wi wi-strong-wind" /> : {`${list[0].speed} m/s`}</p>
          </Col>
          <Col>
            <img
              src={`http://openweathermap.org/img/w/${list[0].weather[0].icon}.png`}
              alt={list[0].weather[0].description} />
          </Col>
          <Col>
            <h3>{'Today: '}</h3>
            <p>{`(${unixTimeConverter(list[0].dt, 'll')})`}</p>
            <div>
              <p><i className="wi wi-sunrise" /> : {unixTimeConverter(list[0].sunrise, 'H:mm')}</p>
              <p><i className="wi wi-sunset" /> : {unixTimeConverter(list[0].sunset, 'H:mm')}</p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <CityCard data={list} title={'Mornig temperature in \u00b0C:'} param={'temp.morn'} />
      </Container>
      <Container fluid>
        <CityCard data={list} title={'Day temperature in \u00b0C:'} param={'temp.day'} />
      </Container>
      <Container fluid>
        <CityCard data={list} title={'Night temperature in \u00b0C:'} param={'temp.night'} />
      </Container>
      <Container fluid>
        <CityCardHumidity data={list} param={'humidity'} />
      </Container>
      <ControllButtons buttonParams={list} />
    </Container>
  )
}

export default CityWeatherContainer;