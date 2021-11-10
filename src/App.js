import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import styled from "styled-components";

import HomeContainer from "./containers/HomeContainer";

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
