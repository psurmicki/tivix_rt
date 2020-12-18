import { map, get } from 'lodash';
import moment from 'moment'

export const unixTimeConverter = (date, format) => {
  let convertedDate = moment.unix(date).format(format)
  return convertedDate;
}

export const getDailyValues = (data, param) => {
  let dailyValues = map(data, day => get(day, param, null))
  if (param === 'humidity') {
    return [...dailyValues, 0, 100]
  } else return [...dailyValues, 0];
}

export const calculateMeanFiveDaysTempValue = (daysValues) => {
  let dayTemp = map(daysValues, day => get(day, 'temp.day', null))
  let eveTemp = map(daysValues, day => get(day, 'temp.eve', null))
  let nightTemp = map(daysValues, day => get(day, 'temp.night', null))
  let mornTemp = map(daysValues, day => get(day, 'temp.morn', null))
  let valueToCalculate = [...dayTemp, ...eveTemp, ...nightTemp, ...mornTemp]
  let meanFiveDayValue = (valueToCalculate.reduce((prevValue, currentValue) => { return prevValue + currentValue })) / valueToCalculate.length;
  return meanFiveDayValue.toFixed(2)
}

export const calculateFiveDaysMinTempValue = (daysValues) => {
  let minimumValues = map(daysValues, day => get(day, 'temp.min', null))
  let fiveDaysMinValue = Math.min(...minimumValues);
  return fiveDaysMinValue
}

export const calculateFiveDaysMaxTempValue = (daysValues) => {
  let maximumValues = map(daysValues, day => get(day, 'temp.max', null))
  let fiveDaysMaxValue = Math.max(...maximumValues);
  return fiveDaysMaxValue
}

export const calculateFiveDaysModeValue = (daysValues) => {
  let dayTemp = map(daysValues, day => get(day, 'temp.day', null))
  let eveTemp = map(daysValues, day => get(day, 'temp.eve', null))
  let nightTemp = map(daysValues, day => get(day, 'temp.night', null))
  let mornTemp = map(daysValues, day => get(day, 'temp.morn', null))
  let valueToCalculate = [...dayTemp, ...eveTemp, ...nightTemp, ...mornTemp].sort((numb1, numb2) => numb1 - numb2)
  let fiveDaysModeValue = Object.values(
    valueToCalculate.reduce((prevValue, currentValue) => {
      if (!(currentValue in prevValue)) {
        prevValue[currentValue] = [0, currentValue];
      }
      prevValue[currentValue][0]++;
      return prevValue;
    }, {})
  ).reduce((accValue, currVal) => currVal[0] < accValue[0] ? accValue : currVal, [0, null])[1];
  return fiveDaysModeValue;
}

export const calculateMeanOneDayTempValue = (dayValues) => {
  let dayTemp = [get(dayValues, 'temp.day', null)]
  let eveTemp = [get(dayValues, 'temp.eve', null)]
  let nightTemp = [get(dayValues, 'temp.night', null)]
  let mornTemp = [get(dayValues, 'temp.morn', null)]
  let valueToCalculate = [...dayTemp, ...eveTemp, ...nightTemp, ...mornTemp]
  let meanOneDayValue = (valueToCalculate.reduce((prevValue, currentValue) => { return prevValue + currentValue })) / valueToCalculate.length;
  return meanOneDayValue.toFixed(2)
}

export const calculateOneDayModeValue = (dayValues) => {
  let dayTemp = [get(dayValues, 'temp.day', null)]
  let eveTemp = [get(dayValues, 'temp.eve', null)]
  let nightTemp = [get(dayValues, 'temp.night', null)]
  let mornTemp = [get(dayValues, 'temp.morn', null)]
  let valueToCalculate = [...dayTemp, ...eveTemp, ...nightTemp, ...mornTemp].sort((numb1, numb2) => numb1 - numb2)
  let oneDayModeValue = Object.values(
    valueToCalculate.reduce((prevValue, currentValue) => {
      if (!(currentValue in prevValue)) {
        prevValue[currentValue] = [0, currentValue];
      }
      prevValue[currentValue][0]++;
      return prevValue;
    }, {})
  ).reduce((accValue, currVal) => currVal[0] < accValue[0] ? accValue : currVal, [0, null])[1];
  return oneDayModeValue;
}

export const calculateFiveDayHumidityModeValue = (daysValues) => {
  let humidityVal = map(daysValues, day => get(day, 'humidity', null))
  console.log({ humidityVal })
  let valueToCalculate = humidityVal.sort((numb1, numb2) => numb1 - numb2)
  let fiveDayHumidityModeValue = Object.values(
    valueToCalculate.reduce((prevValue, currentValue) => {
      if (!(currentValue in prevValue)) {
        prevValue[currentValue] = [0, currentValue];
      }
      prevValue[currentValue][0]++;
      return prevValue;
    }, {})
  ).reduce((accValue, currVal) => currVal[0] < accValue[0] ? accValue : currVal, [0, null])[1];
  return fiveDayHumidityModeValue;
}

