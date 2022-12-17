import { PlusCircle } from 'phosphor-react'
import { Card } from '../Card'
import { ListContainer } from './styles'

export function List({ data }) {
  return (
    <ListContainer>
      <header>
        <h2>{data.title}</h2>
        {data.creatable && (
          <button type="button">
            <PlusCircle size={24} />
          </button>
        )}
      </header>

      <ul>
        {data.cards.map((card) => {
          return <Card key={card.id} data={card} />
        })}
        <Card />
        <Card />
        <Card />
      </ul>
    </ListContainer>
  )
}
