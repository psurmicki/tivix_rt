import React from 'react';
import { Row } from 'reactstrap';
import noData from '../images/noData.png';
import '../styles/NoData.css';

const NoData = () => {
  return (
    <div>
      <Row>
        <img
          className="NoData-Image"
          src={noData}
          alt="no data in DB"
        />
      </Row>
      <Row noGutters className='NoData-Row'>
        <h2 className='NoData-Text'>
          {'Please, choose another city...'}
        </h2>
      </Row>
    </div>
  )
}

export default NoData;