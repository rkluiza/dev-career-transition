import React from "react";
import { GlobalStyle } from "./Components/GlobalStyle";
import styled, { ThemeProvider } from "styled-components";
import { temaClaro, temaEscuro } from "./Components/UI/temas";

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";

function App() {
  return (
    <>
    <ThemeProvider theme={temaClaro}>
      <GlobalStyle/>
      <Cabecalho />
      <Container />
    </ThemeProvider>
    
    </>
  );
}

export default App;
