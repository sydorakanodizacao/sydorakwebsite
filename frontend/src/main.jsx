import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'
import { capturarAtribuicao } from './utils/atribuicao'
import './styles/index.css'

// UTMs/click IDs da página de entrada — antes do roteador, enquanto a query string existe
capturarAtribuicao()

// O roteador (BrowserRouter) vive em App.jsx (Fase 3). Aqui ficam só os
// providers globais que envolvem toda a aplicação.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
)
