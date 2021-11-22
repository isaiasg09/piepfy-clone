import React from 'react';

import { Container } from './styles';


export default function Header(props) {
  return (
    <Container>
      <h1>Pipefy Clone</h1>
      {props.children}
    </Container>
  );
}
