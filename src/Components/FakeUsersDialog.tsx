import React, { SyntheticEvent } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/lab/Slider";
import Tooltip from "@material-ui/core/Tooltip";
import * as actions from "../Actions";
import { connect } from "react-redux";
import { styles } from "../Utilities/FakeUserDialogStyle";

interface Props extends WithStyles<typeof styles> {
  AddFakeUsers?: Function;
  open: boolean;
  handleClose: any;
}

class FakeUsersDialogBase extends React.Component<Props> {
  state = {
    numberUserToFake: 10
  };

  handleChange = (event: SyntheticEvent<{}>, numberUserToFake: number) => {
    this.setState({ numberUserToFake });
  };

  handleAddUsers = () => {
    this.props.AddFakeUsers
      ? this.props.AddFakeUsers(this.state.numberUserToFake)
      : "";
    this.props.handleClose();
  };

  render() {
    const { classes, open, handleClose } = this.props;
    const { numberUserToFake } = this.state;
    return (
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
          maxWidth={"sm"}
          fullWidth
        >
          <DialogTitle id="form-dialog-title">Add Fake Users</DialogTitle>
          <DialogContent>
            <Tooltip title={numberUserToFake} placement="top">
              <Slider
                classes={{ container: classes.slider }}
                value={numberUserToFake}
                min={0}
                max={150}
                step={1}
                onChange={this.handleChange}
              />
            </Tooltip>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleAddUsers} color="primary">
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export const FakeUsersDialog = withStyles(styles)(
  connect(
    null,
    actions
  )(FakeUsersDialogBase)
);
