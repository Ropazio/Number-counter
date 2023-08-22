import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import Counter from "./CounterUpdateAll";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Counter />
  </StrictMode>
);