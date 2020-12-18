import { useEffect, useReducer } from 'react';
import { apiReducer } from '../reducers.jsx';

const API_KEY = 'c86afaff060189aca68ba96bc2e8aebb'

const fetchData = async (path) => {
  console.log(path)
  if (!path) return;
  const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${path}&cnt=5&units=metric&appid=${API_KEY}`);

  if (response.ok) {
    return response.json();
  }
  throw new Error(response.status);
};

export const useData = (path) => {
  const [response, dispatch] = useReducer(apiReducer, { data: null, isLoading: false, error: null });
  useEffect(() => {
    dispatch({ type: 'FETCHING_DATA' });
    fetchData(path)
      .then((data) => dispatch({ type: 'FETCHED_SUCCESS', payload: data }))
      .catch((error) => dispatch({ type: 'FETCHED_FAILED', payload: error }));
  }, [path]);
  return response;
};