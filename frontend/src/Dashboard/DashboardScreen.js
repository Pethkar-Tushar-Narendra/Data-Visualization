import React, { useEffect, useReducer } from 'react';
import './DashboardScreen.css';
import axios from 'axios';
import AreaDiagram from './Charts/AreaDiagram';
import BarDiagram from './Charts/BarDiagram';
import FilterBox from './Filters/FilterBox';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        summary: action.payload,
        loading: false,
      };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
const DashboardScreen = () => {
  const [{ loading, summary, error }, dispatch] = useReducer(reducer, {
    loading: true,
    error: '',
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('api/data/summary', {
          headers: { Authorization: `SomethingSecret` },
        });
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {
        dispatch({
          type: 'FETCH_FAIL',
          payload: err.response.data.message
            ? err.response.data.message
            : err.message,
        });
      }
    };
    fetchData();
  }, []);

  return (
    <div className="barchart-container">
      <h1 className="title">Dashboard Screen</h1>
      {loading ? (
        <></>
      ) : error ? (
        <h1 className="title">{error}</h1>
      ) : (
        <>
          <div className="chart-grid">
            <AreaDiagram
              dataFromParent={summary.topics}
              title={'Topic Data'}
              name={'# of Data'}
            />
          </div>
          <div className="chart-grid">
            <BarDiagram
              dataFromParent={summary.likelihood}
              title={'Likelihood Data'}
              name={'# of Data'}
            />
          </div>
          <div className="chart-grid">
            <BarDiagram
              dataFromParent={summary.relevance}
              title={'Relevance Data'}
              name={'# of Data'}
            />
          </div>
          <div className="chart-grid">
            <AreaDiagram
              dataFromParent={summary.intensity}
              title={'Intensity Data'}
              name={'# of Data'}
            />
          </div>
          <div className="chart-grid">
            <BarDiagram
              dataFromParent={summary.region}
              title={'Region Data'}
              name={'# of Data'}
            />
          </div>
          <div className="chart-grid">
            <AreaDiagram
              dataFromParent={summary.country}
              title={'Country Data'}
              name={'# of Data'}
            />
          </div>
          <div className="chart-grid">
            <BarDiagram
              dataFromParent={summary.start_year}
              title={'Start_year Data'}
              name={'# of Data'}
            />
          </div>
          <div className="filter">
            <FilterBox />
          </div>
        </>
      )}
    </div>
  );
};

export default DashboardScreen;
