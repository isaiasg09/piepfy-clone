import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font: 14px 'Robot', sans-serif;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    -webkit-font-smoothing: antialiased !important;
    transition: background .4s ease;
  }

  ul {
    list-style: none;
  }

  .card {
    background: ${({ theme }) => theme.toggleBorder};
  }

  .toggle {
    -webkit-appearance: none;
    position: absolute;
    right: 15px;
    width: 50px;
    height: 25px;
    background-color: #FFF;
    border-radius: 50px;
    outline: none;
    cursor: pointer;
    transition: .5s ease all;
  }

  .toggle:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: navy;
    transition: .5s ease all;
    border-radius: 50px;
  }

  .toggle:checked {
    background-color: #212022;
  }

  .toggle:checked:before {
    transform: translate(100%);
  }
`;