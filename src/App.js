import React, { useReducer } from "react";
import { appReducer, initialState } from "./app-reducer";
import { Router } from "@reach/router";
import { Questions } from "./containers/questions";
import { Intro } from "./containers/intro";
import { Results } from "./containers/results";

export const AppContext = React.createContext({});

function App() {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <Router>
        <Intro path="/" />
        <Questions path="/questions" />
        <Results path="/results" />
      </Router>
    </AppContext.Provider>
  );
}

export default App;
