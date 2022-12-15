import React, { useState } from 'react';
import './Box.css';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { GrFormClose } from 'react-icons/gr';
import { HiSearch } from 'react-icons/hi';
const Box = ({ title, value, setValue, toggle, modal, array }) => {
  const [query, setQuery] = useState('');
  return (
    <div className="box">
      <p className="label">{title}</p>
      <div className="value" onClick={toggle}>
        <h3>{value ? value : 'Select'}</h3>
        <i>{modal ? <GrFormClose /> : <RiArrowDropDownLine />}</i>
      </div>
      <div className="popup" style={{ display: modal ? 'flex' : 'none' }}>
        <div className="search">
          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            placeholder="Search"
          ></input>
          <i>
            <HiSearch />
          </i>
        </div>
        <div className="option">
          {array
            .filter((item) => item.toUpperCase().includes(query.toUpperCase()))
            .sort((a, b) => (a > b ? 1 : -1))
            .sort((a, b) => (a.toUpperCase() > b.toUpperCase() ? 1 : -1))
            .map((item, i) => (
              <h4
                key={i}
                onClick={() => {
                  setValue(item);
                  toggle();
                }}
              >
                {item ? item : 'Not Available'}
              </h4>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Box;
