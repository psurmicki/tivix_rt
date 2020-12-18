import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import {
  unixTimeConverter,
  calculateMeanFiveDaysTempValue,
  calculateMeanOneDayTempValue,
  calculateFiveDaysMinTempValue,
  calculateFiveDaysMaxTempValue,
  calculateFiveDaysModeValue,
  calculateOneDayModeValue,
  calculateFiveDayHumidityModeValue
} from '../utils/functions.jsx';

const CityDetailsCard = ({ data }) => {
  return (
    <Container style={{ marginBottom: '10px' }}>
      <Row noGutters>
        <h2>
          {
            data.length > 1 ? '5-day weather details' : unixTimeConverter(data[0].dt, 'll')
          }
        </h2>
      </Row>
      <Row noGutters>
        <Col>
          <span>
            <p><i className="wi wi-thermometer" /> {'Minimum Temperature Value: '}</p>
          </span>
        </Col>
        <Col>
          <span>
            {data.length > 1 ?
              calculateFiveDaysMinTempValue(data) :
              data[0].temp.min
            }
            {' \u00b0C:'}
          </span>
        </Col>
      </Row>
      <Row noGutters>
        <Col>
          <span>
            <p><i className="wi wi-thermometer" /> {'Maximum Temperature Value: '}</p>
          </span>
        </Col>
        <Col>
          <span>
            {data.length > 1 ?
              calculateFiveDaysMaxTempValue(data) :
              data[0].temp.max
            }
            {' \u00b0C:'}
          </span>
        </Col>
      </Row>
      <Row noGutters>
        <Col>
          <span>
            <p><i className="wi wi-thermometer" /> {'Mean Temperature Value: '} </p>
          </span>
        </Col>
        <Col>
          <span>
            {data.length > 1 ?
              calculateMeanFiveDaysTempValue(data) :
              calculateMeanOneDayTempValue(data[0])
            }
            {' \u00b0C:'}
          </span>
        </Col>
      </Row>
      <Row noGutters>
        <Col>
          <span>
            <p><i className="wi wi-thermometer" /> {'Mode Temperature Value: '} </p>
          </span>
        </Col>
        <Col>
          <span>
            {data.length > 1 ?
              calculateFiveDaysModeValue(data) :
              calculateOneDayModeValue(data[0])
            }
            {' \u00b0C:'}
          </span>
        </Col>
      </Row>
      <Row noGutters>
        <Col>
          <span>
            <p><i className="wi wi-humidity" /> {'Mode Himidity Value: '}</p>
          </span>
        </Col>
        <Col>
          <span>
            {data.length > 1 ?
              calculateFiveDayHumidityModeValue(data) :
              `${data[0].humidity}`
            }
          </span>
          {' \u0025:'}
        </Col>
      </Row>
    </Container>
  )
}

export default CityDetailsCard;