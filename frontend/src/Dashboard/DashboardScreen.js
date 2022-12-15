import React from 'react';
import './DashboardScreen.css';
import AreaDiagram from './Charts/AreaDiagram';
import BarDiagram from './Charts/BarDiagram';
import FilterBox from './Filters/FilterBox';
import summary from '../Summary';
const DashboardScreen = () => {
  return (
    <div className="barchart-container">
      <h1 className="title">Dashboard Screen</h1>

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
    </div>
  );
};

export default DashboardScreen;
