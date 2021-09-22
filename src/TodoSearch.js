import React from 'react';
import './TodoSearch.css';

function TodoSearch() {
  const [searchValue, setSearchValue] = React.useState();

  const onSearchValue = (event) =>{
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <input 
    className="TodoSearch" 
    placeholder="Escribe una actividad" 
    value={searchValue}
    onChange={onSearchValue}
    />
    );
};

export { TodoSearch };