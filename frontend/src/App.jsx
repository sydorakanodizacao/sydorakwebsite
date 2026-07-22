import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { RootLayout } from './components/layout/RootLayout'
import { Home } from './pages/Home'
import { ComponentLibrary } from './pages/ComponentLibrary'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import About from './pages/About'
import Service from './pages/Service'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfUse from './pages/TermsOfUse'
import CookiePolicy from './pages/CookiePolicy'
import CookieBanner from './components/ui/CookieBanner'
import ScrollToTop from './components/layout/ScrollToTop'

/**
 * App — roteamento central (Fase 3 & 4 - LGPD).
 *   /design-system  → ComponentLibrary isolada (sem casca global)
 *   /               → RootLayout (Navbar + Footer)
 *       index       → Home
 *       sobre-nos   → About
 *       servicos    → Service
 *       contato     → Contact
 *       privacidade → PrivacyPolicy
 *       termos      → TermsOfUse
 *       cookies     → CookiePolicy
 */
export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Biblioteca de componentes: renderizada de forma isolada, sem Navbar/Footer */}
        <Route path="/design-system" element={<ComponentLibrary />} />

        {/* Site público: casca global com rotas aninhadas */}
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="sobre-nos" element={<About />} />
          <Route path="servicos" element={<Service />} />
          <Route path="servico" element={<Service />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogPost />} />
          <Route path="contato" element={<Contact />} />
          <Route path="privacidade" element={<PrivacyPolicy />} />
          <Route path="termos" element={<TermsOfUse />} />
          <Route path="cookies" element={<CookiePolicy />} />
        </Route>
      </Routes>
      <CookieBanner />
    </BrowserRouter>
  )
}
