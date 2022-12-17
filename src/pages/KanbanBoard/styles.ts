import styled from 'styled-components'

export const KanbanBoardContainer = styled.div`
  flex: 1;
  padding: 3.5rem;
  height: 100%;
  display: flex;

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme['gray-100']};
  }
`
