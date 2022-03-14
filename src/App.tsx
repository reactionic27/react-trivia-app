import { Router } from "@reach/router";
import { ReactElement } from "react";
import { QuestionsPage } from "./pages/Questions";
import { IntroPage } from "./pages/Intro";
import { ResultsPage } from "./pages/Results";

import "./App.css";

function App(): ReactElement {
  return (
    <Router>
      <IntroPage path="/" />
      <QuestionsPage path="/questions" />
      <ResultsPage path="/results" />
    </Router>
  );
}

export default App;
