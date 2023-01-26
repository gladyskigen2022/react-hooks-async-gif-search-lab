import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Search } from 'semantic-ui-react'

function GifSearch({search, setSearch}) {

    function handleSearchChange(e) {
        console.log(e.target.value)
        setSearch(e.target.value)
    }

   // function handleSubmit(e) {
        //console.log(e.target.value) 
   // }

    return (
        <Search
          className="search-bar"
          placeholder='Search...'
          onSearchChange={handleSearchChange}
          style={{marginLeft: "45px"}}
        />
    )
}

export default GifSearch;