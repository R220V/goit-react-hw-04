import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App/App'
import clsx from 'clsx';
import 'modern-normalize';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>hw4</h1>
    <App />
  </StrictMode>,
)
