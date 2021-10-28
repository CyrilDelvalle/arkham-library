import React from "react";
import { Search } from "semantic-ui-react";

function SearchBar() {
  return (
    <Search
      showNoResults={false}
      //   onSearchChange={handleFilterTextChange}
      //   value={pokemon.filterText}
    />
  );
}

export default SearchBar;
