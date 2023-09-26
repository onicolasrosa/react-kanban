import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// aqui eu chamo o app
import App from "./App";

// chama o root do index.html
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  // sintaxe jsx
  // no inicio nem precisa desse strictmode
  <StrictMode>
    <App />
  </StrictMode>
);
