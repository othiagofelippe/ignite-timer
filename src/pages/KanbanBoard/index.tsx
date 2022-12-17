import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import { List } from './components/List'
import { KanbanBoardContainer } from './styles'

import { loadLists } from '../../service/api'

const lists = loadLists()

export function KanbanBoard() {
  return (
    <DndProvider backend={HTML5Backend}>
      <KanbanBoardContainer>
        {lists.map((list) => {
          return <List key={list.title} data={list} />
        })}
      </KanbanBoardContainer>
    </DndProvider>
  )
}
