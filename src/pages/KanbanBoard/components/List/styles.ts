import styled from 'styled-components'

export const ListContainer = styled.div`
  padding: 0 15px;
  height: 100%;
  flex: 0 0 256px;

  div {
    border-left: 1px solid rgba(0, 0, 0, 0.5);
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;
  }

  button {
    width: 42px;
    height: 42px;
    border-radius: 18px;
    background: #3b5bfd;
    border: 0;
    cursor: pointer;
  }
  ul {
    max-height: 394px;
    margin-top: 30px;
    overflow-y: scroll;
  }
`
