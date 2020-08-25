import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";
// import { STRAIN_API_KEY } from "./constants";
import Strains from "./strains";
// import allStrains from "./allStains.json";
/*
(Object.keys(strains).map((keyName, i) => (
  <tr key={i}>
    <td>Name: {keyName}</td>
    <td>medical effefects: {strains[keyName].effects.medical}</td>
    <td>negative effefects: {strains[keyName].effects.negative}</td>
    <td>positive effefects: {strains[keyName].effects.positive}</td>
  </tr>
)
*/

const STRAIN_API_KEY = "nDMrOHm";

function App() {
  const [searchCritiria, setSearchCritiria] = useState("");
  const [strains, setStrains] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (searchCritiria && searchCritiria.length) {
        const result = await axios({
          method: "GET",
          url: `https://strainapi.evanbusse.com/${STRAIN_API_KEY}/strains/search/name/${searchCritiria}`,
        });
        setStrains(result.data);
      }
    };

    fetchData();
  }, [searchCritiria]);

  const handleChange = (event) => {
    setSearchCritiria(event.target.value);
  };

  return (
    <div className="text-center">
      <header className="">
        <input type="text" name="searchSrain" id="" onChange={handleChange} />
        <h1 className="lead text-light">
          {searchCritiria && searchCritiria.length
            ? `searching ${searchCritiria}`
            : "all stain search"}
        </h1>
        <code>{searchCritiria}</code>
        <Strains data={strains} />
      </header>
    </div>
  );
}

export default App;
