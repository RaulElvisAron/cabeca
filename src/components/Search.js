// src/components/Search.js
import React, { useState, useEffect } from 'react';
import locations from '../database';

function Search({ setCenter, setPopupInfo }) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [activeSuggestion, setActiveSuggestion] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    if (query) {
      const filteredSuggestions = locations.filter(location =>
        location.name.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [query]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleClick = (suggestion) => {
    setQuery(suggestion.name);
    setCenter([suggestion.lat, suggestion.lng]);
    setPopupInfo(suggestion);
    setShowSuggestions(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      if (activeSuggestion < suggestions.length - 1) {
        setActiveSuggestion(activeSuggestion + 1);
      }
    } else if (e.key === 'ArrowUp') {
      if (activeSuggestion > 0) {
        setActiveSuggestion(activeSuggestion - 1);
      }
    } else if (e.key === 'Enter') {
      setQuery(suggestions[activeSuggestion].name);
      setCenter([suggestions[activeSuggestion].lat, suggestions[activeSuggestion].lng]);
      setPopupInfo(suggestions[activeSuggestion]);
      setShowSuggestions(false);
    }
  };

  const handleBlur = () => {
    setTimeout(() => {
      setShowSuggestions(false);
    }, 100);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        placeholder="Pesquisar região..."
      />
      {showSuggestions && query && (
        <ul>
          {suggestions.map((suggestion, index) => (
            <li
              key={suggestion.name}
              onClick={() => handleClick(suggestion)}
              className={index === activeSuggestion ? 'active' : ''}
            >
              {suggestion.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Search;
