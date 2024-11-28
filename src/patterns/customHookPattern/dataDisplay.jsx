// DataDisplay.js
import React from "react";
import useFetchData from "./useFetchData";

const DataDisplay = ({ url }) => {
  const data = useFetchData(url);
  return data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>;
};
export default DataDisplay;
