import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import styled from "styled-components";

import HomeContainer from "./containers/HomeContainer";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

function App() {
  return (
      <>
        <HomeContainer/>
      </>
);
}

export const StyledButton = styled.button`
  padding: 8px;
`;

export default App;
