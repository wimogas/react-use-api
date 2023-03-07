import React from "react";

import './style.css';

import { UIContextProvider } from "./store/ui-context";
import { ItemsContextProvider } from "./store/items-context";

import FetchPage from "./pages/FetchPage";

const App = () => {

  return (
    <UIContextProvider>
      <ItemsContextProvider>
        <FetchPage/>
      </ItemsContextProvider>
    </UIContextProvider>

  );
};

export default App;
