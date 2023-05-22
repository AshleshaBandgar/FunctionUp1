import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

export default function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");   //to remove or clear both the input and data

  const handleFilter = (event) => {
    const searchWord = event.target.value;   //to access the value inside input using searchWord variable
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase()); //if value.title includes the searchWord then only we will keep it.
    });                                         //lowerCase=>if u type whole book name, then only u will see the option

    if (searchWord === "") {
      setFilteredData([]);
    } else {                  //this logic is for if u type something, u can still see the options so to remove that this is the logic.
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      <div className="data">
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.map((value, key) => {
            return (
              <a className="dataItem" href={value.link} target="_blank" rel="noreferrer"> 
                <p>{value.title} </p>                                                     
              </a>
            );
          })}
        </div>
      )}
      </div>
    </div>
  );
}

