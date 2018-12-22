import * as React from "react";
import { Header } from "./Header";
import { Body } from "./Body";
import { FakeUsersDialog } from "./FakeUsersDialog";

export class Home extends React.Component {
  state = {
    open: true
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Header />
        <br />
        <Body open={this.state.open} />
        <FakeUsersDialog
          handleClose={this.handleClose}
          open={this.state.open}
        />
      </div>
    );
  }
}
