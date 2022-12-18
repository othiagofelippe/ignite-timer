import { useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'

import { CardContainer, Label } from './styles'

interface CardProps {
  data: { id: number; content: string; labels: string; user?: string }
  index: number
}

export function Card({ data, index }: CardProps) {
  const ref = useRef()

  const [{ isDragging }, dragPreview] = useDrag(() => ({
    type: 'card',
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }))

  const [, dropRef] = useDrop({
    accept: 'card',
    hover(item, monitor) {
      console.log(`Index do item =>${item.index}; Index => ${index}`)
    },
  })

  dragPreview(dropRef(ref))

  return (
    <CardContainer ref={ref} isDragging={isDragging}>
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
