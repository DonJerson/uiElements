import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import PrietoLogin from "./PrietoLogin";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <PrietoLogin />
  </StrictMode>
);
