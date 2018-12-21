import * as React from "react";

import "./styles.css";
import { Home } from "./Components/Home";

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}
