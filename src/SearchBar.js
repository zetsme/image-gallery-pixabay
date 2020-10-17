import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({ searchImages }) => {
  const [text, setText] = useState('');
  const submitFormHandle = (e) => {
    e.preventDefault();
    searchImages(text);
  };
  return (
    <div className='searchbar'>
      <form className='searchbar__form' onSubmit={submitFormHandle}>
        <div className='searchbar__formControl'>
          <input
            className='searchbar__input'
            value={text}
            onChange={(e) => setText(e.target.value)}
            type='text'
            placeholder='Search Image.....'
          />
          <button className='searchbar__btn'>
            Search
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
