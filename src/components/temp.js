import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/ui/Header";
import StrainsGrid from "./components/strains/StarinsGrid";
import Search from "./components/ui/Search";

const STRAIN_API_KEY = "nDMrOHm";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await axios({
        method: "GET",
        url: `http://strainapi.evanbusse.com/${STRAIN_API_KEY}/strains/search/name/${query}`,
      });

      setData(result.data);
      setIsLoading(false);
      // console.log(result.data);
    };

    fetchData();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <StrainsGrid isLoading={isLoading} strains={data} />
    </div>
  );
}

export default App;

// useEffect(() => {
//   const fetchData = async () => {
//     setIsLoading(true);
//     const result = await axios({
//       method: "GET",
//       url: "https://neobi.p.rapidapi.com/api/producers",
//       headers: {
//         "content-type": "application/octet-stream",
//         "x-rapidapi-host": "neobi.p.rapidapi.com",
//         "x-rapidapi-key":
//           "6cf20e522fmshb5f182c7e9f362ap1ee34fjsn9ac59ea51f58",
//         useQueryString: true,
//       },
//       params: {
//         count: "5",
//         page: "1",
//         rev: "v1.7",
//       },
//     });

//     setData(result.data);
//     setIsLoading(false);
//     // console.log(result.data);
//   };

//   fetchData();
// }, []);

//   return (
//     <div className="container">
//       <header>
// <h1>all effects:</h1>
// <table>
//   {data && data.length ? (
//     data.map((record) => {
//       return (
//         <tr>
//           {/* <td>{record.effect}</td> */}
//           {/* <td>{record.type}</td> */}
//         </tr>
//       );
//     })
//   ) : (
//     <tr>
//       <td>data still</td>
//       <td>loading</td>
//     </tr>
//   )}
// </table>
//       </header>
//     </div>
//   );
// }

// export default App;

// const App = () => {
//   const [items, setItems] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const fetchItems = async () => {
//       setIsLoading(true);
//       const result = await axios({
//         method: "GET",
//         url: `http://strainapi.evanbusse.com/${STRAIN_API_KEY}`,
// headers: {
//   "content-type": "application/x-www-form-urlencoded",
//   "x-rapidapi-host": "StrainraygorodskijV1.p.rapidapi.com",
//   "x-rapidapi-key":
//     "6cf20e522fmshb5f182c7e9f362ap1ee34fjsn9ac59ea51f58",
// useQueryString: true,
// },
//     });
//     console.log(result.data);

//     setItems(result.data);
//     setIsLoading(false);
//   };

//   fetchItems();
// }, []);

// console.log(items);

// const fetchData = React.useCallback(() => {
//   axios({
//     method: "GET",
//     url: "https://strainraygorodskijv1.p.rapidapi.com/getAllStrains",
//     headers: {
//       "content-type": "application/x-www-form-urlencoded",
//       "x-rapidapi-host": "StrainraygorodskijV1.p.rapidapi.com",
//       "x-rapidapi-key": "6cf20e522fmshb5f182c7e9f362ap1ee34fjsn9ac59ea51f58",
//     },
//   })
//     .then((response) => {
//       setItems(response.data);
//       console.log(response.data);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }, []);
// React.useEffect(() => {
//   fetchData();
// }, [fetchData]);

//   return (
//     <div className="container">
//       <Header />
//     </div>
//   );
// };

// export default App;
