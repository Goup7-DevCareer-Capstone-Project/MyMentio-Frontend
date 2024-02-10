import React from "react";
import SearchBar from "../components/SearchBar/searchBar";



const TherapistTypeSelection = ({ onSelectionChange }) => {
    return (
      <div>
        <button onClick={() => onSelectionChange('male')}>Male</button>
        <button onClick={() => onSelectionChange('female')}>Female</button>
        <button onClick={() => onSelectionChange('random')}>At random</button>
      </div>
    );
  };


const Search = () => {
    const selectTherapistType = (type) => {
      NodeFilter(type); // Replace with actual logic to handle therapist type selection
    };
  
    return (
      <div id="search">
        
        <main>
          <SearchBar />
          <TherapistTypeSelection onSelectionChange={selectTherapistType} />
        </main>
       
      </div>
    );
  };
  
  export default Search;
  