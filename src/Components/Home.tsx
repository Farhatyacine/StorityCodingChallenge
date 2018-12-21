import * as React from "react";
import { Header } from "./Header";
import { Body } from "./Body";

export class Home extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <Header />
        <br />
        <Body />
      </div>
    );
  }
}
