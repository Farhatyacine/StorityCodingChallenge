import * as React from "react";

import "./styles.css";
import { Home } from "./Components/Home";
import { FakeUsersDialog } from "./Components/FakeUsersDialog";

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <FakeUsersDialog />
        <Home />
      </div>
    );
  }
}
