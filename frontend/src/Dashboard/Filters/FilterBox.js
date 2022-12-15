import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react';
import './FilterBox.css';
import Box from './SearchfilterCard/Box';
import Header from './Table/Header/Header';
import Row from './Table/Row/Row';
import { BiPlus } from 'react-icons/bi';
import { BiMinus } from 'react-icons/bi';
const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        json: action.payload,
        loading: false,
      };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
const FilterBox = () => {
  const [{ loading, json, error }, dispatch] = useReducer(reducer, {
    loading: true,
    error: '',
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('api/data/get', {
          headers: { Authorization: `SomethingSecret` },
        });
        dispatch({ type: 'FETCH_SUCCESS', payload: data.DBdata });
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
  const [end_year, setEndYear] = useState('');
  const [topics, setTopics] = useState('');
  const [sector, setSector] = useState('');
  const [region, setRegion] = useState('');
  const [pestle, setPestle] = useState('');
  const [source, setSource] = useState('');
  const [end_yearIsOpen, setEndYearIsOpen] = useState(false);
  const [topicsIsOpen, setTopicsIsOpen] = useState(false);
  const [sectorIsOpen, setSectorIsOpen] = useState(false);
  const [regionIsOpen, setRegionIsOpen] = useState(false);
  const [pestleIsOpen, setPestleIsOpen] = useState(false);
  const [sourceIsOpen, setSourceIsOpen] = useState(false);
  const [filterObj, setFilterObj] = useState({
    end_year,
    topics,
    sector,
    region,
    pestle,
    source,
  });
  const end_yearToggle = () => {
    setEndYearIsOpen(!end_yearIsOpen);
    setTopicsIsOpen(false);
    setSectorIsOpen(false);
    setRegionIsOpen(false);
    setPestleIsOpen(false);
    setSourceIsOpen(false);
  };

  const topicsToggle = () => {
    setEndYearIsOpen(false);
    setTopicsIsOpen(!topicsIsOpen);
    setSectorIsOpen(false);
    setRegionIsOpen(false);
    setPestleIsOpen(false);
    setSourceIsOpen(false);
  };
  const sectorToggle = () => {
    setEndYearIsOpen(false);
    setTopicsIsOpen(false);
    setSectorIsOpen(!sectorIsOpen);
    setRegionIsOpen(false);
    setPestleIsOpen(false);
    setSourceIsOpen(false);
  };
  const regionToggle = () => {
    setEndYearIsOpen(false);
    setTopicsIsOpen(false);
    setSectorIsOpen(false);
    setRegionIsOpen(!regionIsOpen);
    setPestleIsOpen(false);
    setSourceIsOpen(false);
  };
  const pestleToggle = () => {
    setEndYearIsOpen(false);
    setTopicsIsOpen(false);
    setSectorIsOpen(false);
    setRegionIsOpen(false);
    setPestleIsOpen(!pestleIsOpen);
    setSourceIsOpen(false);
  };
  const sourceToggle = () => {
    setEndYearIsOpen(false);
    setTopicsIsOpen(false);
    setSectorIsOpen(false);
    setRegionIsOpen(false);
    setPestleIsOpen(false);
    setSourceIsOpen(!sourceIsOpen);
  };
  var array = [
    {
      title: 'End Year',
      value: end_year,
      func: setEndYear,
      toggle: end_yearToggle,
      modal: end_yearIsOpen,
    },
    {
      title: 'Topic',
      value: topics,
      func: setTopics,
      toggle: topicsToggle,
      modal: topicsIsOpen,
    },
    {
      title: 'Region',
      value: region,
      func: setRegion,
      toggle: regionToggle,
      modal: regionIsOpen,
    },
    {
      title: 'Sector',
      value: sector,
      func: setSector,
      toggle: sectorToggle,
      modal: sectorIsOpen,
    },
    {
      title: 'Pestle',
      value: pestle,
      func: setPestle,
      toggle: pestleToggle,
      modal: pestleIsOpen,
    },
    {
      title: 'Source',
      value: source,
      func: setSource,
      toggle: sourceToggle,
      modal: sourceIsOpen,
    },
  ];
  const [pageNo, setPageNo] = useState(1);
  const cardsInPage = 100;
  var tempArray = [];
  return (
    <div className="filter-container">
      <h2 className="title">Search Data with Filter</h2>
      {loading ? (
        <></>
      ) : error ? (
        <></>
      ) : (
        <>
          {array.map((ele, i) => {
            var array = [];
            switch (ele.title) {
              case 'Region': {
                array = [...new Set(json.map((item) => item.region))];
                break;
              }
              case 'End Year': {
                array = [...new Set(json.map((item) => item.end_year))];
                break;
              }
              case 'Sector': {
                array = [...new Set(json.map((item) => item.sector))];
                break;
              }
              case 'Topic': {
                array = [...new Set(json.map((item) => item.topic))];
                break;
              }
              case 'Pestle': {
                array = [...new Set(json.map((item) => item.pestle))];
                break;
              }
              case 'Source': {
                array = [...new Set(json.map((item) => item.source))];
                break;
              }
              default: {
                array = [...new Set(json.map((item) => item.region))];
                break;
              }
            }
            return (
              <Box
                key={i}
                array={array}
                value={ele.value}
                title={ele.title}
                setValue={ele.func}
                toggle={ele.toggle}
                modal={ele.modal}
              />
            );
          })}

          <div className="search-button">
            <div
              className="btn"
              onClick={() => {
                setPageNo(1);
                setFilterObj({
                  end_year,
                  topics,
                  sector,
                  region,
                  pestle,
                  source,
                });
              }}
            >
              Search
            </div>
          </div>
          {json
            .filter(
              (item, i) =>
                item.end_year
                  .toUpperCase()
                  .includes(filterObj.end_year.toUpperCase()) &&
                item.topic
                  .toUpperCase()
                  .includes(filterObj.topics.toUpperCase()) &&
                item.sector
                  .toUpperCase()
                  .includes(filterObj.sector.toUpperCase()) &&
                item.region
                  .toUpperCase()
                  .includes(filterObj.region.toUpperCase()) &&
                item.pestle
                  .toUpperCase()
                  .includes(filterObj.pestle.toUpperCase()) &&
                item.source
                  .toUpperCase()
                  .includes(filterObj.source.toUpperCase())
            )
            .map((item) => {
              tempArray.push(item);
            })}
          <div className="table">
            <Header />
            <Row
              array={tempArray}
              end_year={end_year}
              sector={sector}
              region={region}
              topics={topics}
              pageNo={pageNo}
              cardsInPage={cardsInPage}
            />
          </div>
          <div className="pageNo">
            <i
              className="btn"
              onClick={() => {
                if (pageNo > 1) setPageNo(pageNo - 1);
              }}
            >
              <BiMinus />
            </i>
            <p>Page No.</p>
            <span className="count">{pageNo}</span>
            <i
              className="btn"
              onClick={() => {
                if (pageNo < Math.ceil(tempArray.length / cardsInPage))
                  setPageNo(pageNo + 1);
              }}
            >
              <BiPlus />
            </i>
          </div>
        </>
      )}
    </div>
  );
};

export default FilterBox;
