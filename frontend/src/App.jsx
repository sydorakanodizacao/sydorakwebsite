import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { RootLayout } from './components/layout/RootLayout'
import { Home } from './pages/Home'
import { ComponentLibrary } from './pages/ComponentLibrary'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'

/**
 * App — roteamento central (Fase 3).
 *   /design-system  → ComponentLibrary isolada (sem casca global)
 *   /               → RootLayout (Navbar + Footer)
 *       index       → Home
 */
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Biblioteca de componentes: renderizada de forma isolada, sem Navbar/Footer */}
        <Route path="/design-system" element={<ComponentLibrary />} />

        {/* Site público: casca global com rotas aninhadas */}
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogPost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
