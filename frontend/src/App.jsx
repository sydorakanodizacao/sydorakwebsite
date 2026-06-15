import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'

/**
 * App — roteamento da aplicação.
 * Fase 1: apenas a rota raiz (smoke). Novas páginas entram aqui.
 */
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  )
}
