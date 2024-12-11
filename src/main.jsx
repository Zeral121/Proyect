import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Text from './App/Text'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Text></Text>
  </BrowserRouter>,
)