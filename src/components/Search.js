import React from "react";

function Search({ handleSearch, setSearch, search }) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={search} onChange={(e) => handleSearch(e.target.value)}/>
        <i className="search icon" onClick={handleSearch}/>
      </div>
    </div>
  );
}

export default Search;
