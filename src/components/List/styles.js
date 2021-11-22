import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 15px;
  height: 100%;
  flex: 0 0 320px;
  opacity: ${props => props.done ? 0.6 : 1};

  & + div {
    border-left: 1px solid #7159c1;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;
    
    h2 {
      font-weight: 500;
      font-size: 18px;
      padding: 0 10px;

      span {
        font-size: 1.1em;
        margin-left: 10px;
      }
    }

    button {
      width: 42px;
      height: 42px;
      border-radius: 18px;
      background-color: #3b5bfd;
      border: 0;
      cursor: pointer;

      transition: cubic-bezier(0.645, 0.045, 0.355, 1) .3s;
    }
    button:hover {
      transform: scale(1.02);
      border-radius: 12px;
    }
    button:active {
      transform: scale(0.98);
      border-radius: 12px;
    }
  }

  ul {
    margin-top: 30px;
  }
`;
