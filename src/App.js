import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';

import dark from './styles/themes/dark';
import light from './styles/themes/light';

import Header from "./components/Header";
import Board from "./components/Board";

function App() {
  const [theme, setTheme] = useState(light);

  const toggleTheme = ()=>{
    setTheme(theme.title === 'light' ? dark : light);
  };
  

  return (
    <ThemeProvider theme={theme}>

      <DndProvider backend={HTML5Backend}>
          <Header toggleTheme={toggleTheme} />
          
          <Board />
          
          <GlobalStyle />
      </DndProvider>
    </ThemeProvider>
  );
}

export default App;
