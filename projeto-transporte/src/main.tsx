import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Routes/Routes'
import './index.css'
import { GlobalStyle } from './GlobalStyle'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
      <GlobalStyle/>
      <Router />
    </BrowserRouter>
)
