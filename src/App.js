import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from "./styles/theme";
import GlobalStyle from './styles/global';

import Header from "./components/Header";
import Board from "./components/Board";

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>

      <DndProvider backend={HTML5Backend}>
          <Header>
            <input type={'checkbox'} onClick={toggleTheme} className="toggle" />
          </Header>
          
          <Board />
          
          <GlobalStyle />
      </DndProvider>
    </ThemeProvider>
  );
}

export default App;
