import { PlusCircle } from 'phosphor-react'
import { Card } from '../Card'
import { ListContainer } from './styles'

export function List() {
  return (
    <ListContainer>
      <header>
        <h2>Tarefas</h2>
        <button type="button">
          <PlusCircle size={24} />
        </button>
      </header>

      <ul>
        <Card />
        <Card />
        <Card />
      </ul>
    </ListContainer>
  )
}
