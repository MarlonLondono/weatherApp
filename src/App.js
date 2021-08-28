import React, { useEffect } from "react";
import SearchBar from './components/searchBar';
import BarLeft from "./components/barLeft";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import {getCurrentCity } from "./actions";

const Div = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 800px) {
    width: 100%;
    flex-direction: column-reverse;
  }
`;

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getCurrentCity('Medellin'))
  },[dispatch])

  return (
    <Div className="App">
      <SearchBar />
      <BarLeft />
    </Div>
  );
}

export default App;
