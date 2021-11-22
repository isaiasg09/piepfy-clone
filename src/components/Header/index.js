import React, { useContext } from 'react';
import ReactSwitch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';

import { Container } from './styles';


export default function Header({ toggleTheme }) {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <h1>Pipefy Clone</h1>

      <ReactSwitch 
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={20}
        width={40}
        handleDiameter={20}
        offColor={shade(0.1, colors.secondary)}
        onColor={shade(0.3, colors.primary)}
        draggable={true}
      />
    </Container>
  );
}
