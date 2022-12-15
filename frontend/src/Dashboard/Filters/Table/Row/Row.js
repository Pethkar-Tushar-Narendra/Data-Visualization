import React from 'react';
import '../Row.css';
const Row = ({ array, topics, pageNo, cardsInPage }) => {
  return (
    <>
      {array
        .filter(
          (item, i) =>
            i >= (pageNo - 1) * cardsInPage && i < pageNo * cardsInPage
        )
        .map((item, i) => (
          <div className="row" key={i}>
            <div className="col1">{(pageNo - 1) * cardsInPage + (i + 1)}</div>
            <div className="col2">
              {item.region ? item.region : 'Not Available'}
            </div>
            <div className="col3">
              {item.intensity ? item.intensity : 'Not Available'}
            </div>
            <div className="col4">
              {item.impact ? item.impact : 'Not Available'}
            </div>
            <div className="col5">
              {item.sector ? item.sector : 'Not Available'}
            </div>
            <div className="col6">
              {item.topic ? item.topic : 'Not Available'}
            </div>
            <div className="col7">
              {item.insight ? item.insight : 'Not Available'}
            </div>
            <div className="col8">{item.url ? item.url : 'Not Available'}</div>
            <div className="col9">
              {item.start_year ? item.start_year : 'Not Available'}
            </div>
            <div className="col10">
              {item.end_year ? item.end_year : 'Not Available'}
            </div>
            <div className="col11">
              {item.added ? item.added : 'Not Available'}
            </div>
            <div className="col12">
              {item.published ? item.published : 'Not Available'}
            </div>
            <div className="col13">
              {item.country ? item.country : 'Not Available'}
            </div>
            <div className="col14">
              {item.relevance ? item.relevance : 'Not Available'}
            </div>
            <div className="col15">
              {item.pestle ? item.pestle : 'Not Available'}
            </div>
            <div className="col16">
              {item.source ? item.source : 'Not Available'}
            </div>
            <div className="col17">
              {item.title ? item.title : 'Not Available'}
            </div>
            <div className="col18">
              {item.likelihood ? item.likelihood : 'Not Available'}
            </div>
          </div>
        ))}
    </>
  );
};

export default Row;
