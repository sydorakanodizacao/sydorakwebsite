import { Outlet } from 'react-router-dom'
import Navbar from './navbar'
import Footer from './footer'

/**
 * RootLayout — casca global do site público da Sydorak Anodização.
 * Navbar fixa no topo, conteúdo da rota via <Outlet /> e Footer empurrado para o
 * fim da página (flex-col + min-h-screen + flex-grow) mesmo com pouco conteúdo.
 *
 * Obs.: Navbar e Footer são default exports em ./navbar e ./footer — por isso os
 * imports aqui são default (e não nomeados).
 */
export function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-canvas antialiased">
      <Navbar />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
