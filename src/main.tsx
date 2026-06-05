import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* URL 기반 페이지 이동을 위한 Router 설정 */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
