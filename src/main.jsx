import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
// 여긴 컴포넌트를 렌더링해주는 컴포넌트 (건드리면 안됨ㄷㄷ)