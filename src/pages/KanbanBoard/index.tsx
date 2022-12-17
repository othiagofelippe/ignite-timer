import { List } from './components/List'
import { KanbanBoardContainer } from './styles'

export function KanbanBoard() {
  return (
    <KanbanBoardContainer>
      <List />
      <List />
      <List />
      <List />
    </KanbanBoardContainer>
  )
}
