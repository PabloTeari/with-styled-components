import React from "react";
import GlobalStyled from "assets/styles/globalStyled";
import { ReduxProvider } from "./states/store";

import Routes from "./routes";

function App() {
  return (
    <ReduxProvider>
      <GlobalStyled />
      <Routes />
    </ReduxProvider>
  );
}

export default App;
