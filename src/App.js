import React, { useEffect } from "react";
import SearchBar from './components/searchBar';
import BarLeft from "./components/barLeft";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { getCity } from "./actions";

const Div = styled.div`
  display: flex;
`;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCity('Medellin'));
  },[])
  return (
    <Div className="App">
      <SearchBar />
      <BarLeft />
    </Div>
  );
}

export default App;
