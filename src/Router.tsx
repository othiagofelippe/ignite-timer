import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'

import { History } from './pages/History'
import { Home } from './pages/Home'
import { KanbanBoard } from './pages/KanbanBoard'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/kanbanboard" element={<KanbanBoard />} />
      </Route>
    </Routes>
  )
}
