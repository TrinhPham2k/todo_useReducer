import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { StoreProvider } from "./store";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </StrictMode>
);
