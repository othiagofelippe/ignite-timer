import { useDrag } from 'react-dnd'

import { CardContainer, Label } from './styles'

interface CardProps {
  data: { id: number; content: string; labels: string; user?: string }
}

export function Card({ data }: CardProps) {
  const [{ isDragging }, dragPreview] = useDrag(() => ({
    type: 'card',
    item: { data },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }))

  return (
    <CardContainer ref={dragPreview} isDragging={isDragging}>
      <header>
        <Label color="#7159C1" />
      </header>
      <p>Fazer a migração completa de servidor</p>

      {data.user && (
        <img src="https://www.github.com/othiagofelippe.png" alt="" />
      )}
    </CardContainer>
  )
}
