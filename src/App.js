import React from "react";
import { Button, Container } from "semantic-ui-react";

import "./App.css";
import Login from "./components/Login";

function App() {
  return (
    <Container>
      <Button primary>Primary</Button>
      <Button secondary>Secondary</Button>
      <Login/>
    </Container>
  );
}

export default App;
