/* eslint-disable default-case */
import React, { useState } from 'react';
import CityDetailsCard from './CityDetailsCard.jsx';
import { unixTimeConverter } from '../utils/functions.jsx';
import { map } from 'lodash';
import { Row, Col, Container, Button } from 'reactstrap';

const ControllButtons = ({ buttonParams, param }) => {
  const [isActiveButtonDetails, setIsActiveButtonDetails] = useState(false)
  const [buttonDetails, setButtonDetails] = useState([])

  const handleDetailsData = (e, day) => {
    setIsActiveButtonDetails(true)
    switch (e.target.name) {
      case ('Button-0'):
      case ('Button-1'):
      case ('Button-2'):
      case ('Button-3'):
      case ('Button-4'):
        setButtonDetails([day])
        break;
      case ('fiveDayButtonData'):
        setButtonDetails(buttonParams)
        break;
    }
  }

  return (
    <Container>
      <Row noGutters style={{ margin: '5px' }}>
        {
          map(buttonParams, (buttonParam, index) => {
            return (
              <Col key={`Col-${index}-Buttons-${index}`}>
                <Button
                  name={`Button-${index}`}
                  size='sm'
                  outline
                  color="info"
                  onClick={(e) => handleDetailsData(e, buttonParams[index])}
                >
                  {`${unixTimeConverter(buttonParam.dt, 'dddd')} weather`}
                </Button>
              </Col>
            )
          })
        }
        <Col>
          <Button
            name='fiveDayButtonData'
            size='sm'
            outline
            color="info"
            onClick={(e) => handleDetailsData(e, buttonParams)}
          >
            {'5-day weather details'}
          </Button>
        </Col>
      </Row>
      <Row noGutters>
        {isActiveButtonDetails &&
          <CityDetailsCard data={buttonDetails} />
        }
      </Row>
    </Container>
  )
}

export default ControllButtons;