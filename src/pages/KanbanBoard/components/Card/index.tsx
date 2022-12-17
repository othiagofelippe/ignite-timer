import { CardContainer, Label } from './styles'
import { useDrag } from 'react-dnd'

export function Card({ data }) {
  const [{ isDragging }, dragPreview] = useDrag(() => ({
    type: 'card',
    item: { data },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }))

  return (
    <CardContainer ref={dragPreview}>
      <header>
        <Label color="#7159C1" />
      </header>
      <p>Fazer a migração completa de servidor</p>
      <img src="https://www.github.com/othiagofelippe.png" alt="" />
    </CardContainer>
  )
}
