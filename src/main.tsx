import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App.tsx";
import { FavoriteProvider } from "./context/FavoriteContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* URL 기반 페이지 이동을 위한 Router 설정 */}
    <BrowserRouter>
      {/* 여러 페이지에서 찜 목록 상태를 공유하기 위한 Provider */}
      <FavoriteProvider>
        <App />
      </FavoriteProvider>
    </BrowserRouter>
  </StrictMode>
);