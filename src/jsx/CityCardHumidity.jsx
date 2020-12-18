/* eslint-disable no-mixed-operators */
import React from 'react';
import { Line } from "react-chartjs-2";
import { Col } from 'reactstrap';
import { unixTimeConverter, getDailyValues } from '../utils/functions.jsx';
import { map } from 'lodash'

const CityCardHumidity = ({ data, param }) => {

  const chartLineData = {
    labels: map(data, day => unixTimeConverter(day.dt, 'll')),
    datasets: [
      {
        label: param,
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: getDailyValues(data, param)
      }
    ]
  };

  return (
    <Col>
      <h2>{'Humidity in \u0025:'}</h2>
      <Line
        data={chartLineData}
        width={100}
        height={50}
      />
    </Col>
  )
}

export default CityCardHumidity;

