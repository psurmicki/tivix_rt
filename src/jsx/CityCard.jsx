/* eslint-disable no-mixed-operators */
import React from 'react';
import { Bar } from "react-chartjs-2";
import { Row } from 'reactstrap';
import { unixTimeConverter, getDailyValues } from '../utils/functions.jsx';
import { map } from 'lodash'

const CityCard = ({ data, title, param }) => {
  let labels = map(data, day => unixTimeConverter(day.dt, 'll'))

  const handleColors = () => {
    let valuesToCheck = getDailyValues(data, param)
    let color = valuesToCheck.map(value => {
      let arg = Math.sign(value)
      if (arg === 1 && param.includes('temp') || arg === 0 && param.includes('temp')) {
        return 'rgb(255, 227, 43)'
      } else return 'rgb(43, 167, 255)'
    })
    return color
  }

  const chartBarData = {
    labels,
    datasets: [
      {
        label: param,
        backgroundColor: handleColors(),
        borderColor: 'rgba(255, 4, 0,1)',
        borderWidth: 1,
        hoverBackgroundColor: handleColors(),
        hoverBorderColor: 'rgba(255,99,132,0.3)',
        data: getDailyValues(data, param)
      },
    ]
  }

  return (
    <Row noGutters>
      <h2>{title}</h2>
      <Bar
        data={chartBarData}
        width={100}
        height={50}
      />
    </Row>
  )
}

export default CityCard;

