import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Routes/Routes'
import './index.css'
import { GlobalStyle } from './GlobalStyle'
import { StudentProvider } from './Contexts/StudentContext'
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <GlobalStyle />
    <GoogleOAuthProvider clientId='272993016280-sjb7lomh8vlh9oiqoa5rg5b66f5vpq4p.apps.googleusercontent.com'>
      <StudentProvider>
        <Router />
      </StudentProvider>
    </GoogleOAuthProvider>
  </BrowserRouter>
)
