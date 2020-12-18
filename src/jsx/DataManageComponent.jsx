/* eslint-disable default-case */
import React, { useState } from 'react';
import { useData } from '../utils/useData.jsx';
import CitySearchForm from './CitySearchForm.jsx';
import CityWeatherContainer from './CityWeatherContainer.jsx';
import NoData from './NoData.jsx';
import '../styles/loader.css';

const DataManageComponent = () => {
  const [path, setPath] = useState('');
  const { data, isLoading, error } = useData(path);

  const handlePathSearch = (fetchParams) => {
    setPath(fetchParams.city)
  }

  return (
    <div>
      <CitySearchForm onSubmit={handlePathSearch} />
      {isLoading ?
        <div className='loader' /> :
        !data ?
          error &&
          <NoData />
          : <CityWeatherContainer data={data} />
      }
    </div>
  )
}

export default DataManageComponent;