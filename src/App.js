import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import BookData from "./Data.json";

function App() {
  return (
    <div className="app">
      <SearchBar placeholder="Enter a Book Name..." data={BookData} />
    </div>
  );
}

export default App;