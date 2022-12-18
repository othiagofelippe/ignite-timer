import { PlusCircle } from 'phosphor-react'
import { Card } from '../Card'
import { ListContainer } from './styles'

interface CardData {
  id: number
  content: string
  labels: string
  done?: boolean
  user?: string
}

interface ListProps {
  data: {
    title: string
    creatable: boolean
    cards: CardData[]
  }
}

export function List({ data }: ListProps) {
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
      </ul>
    </ListContainer>
  )
}
