import React, { SyntheticEvent } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DatePicker } from "material-ui-pickers";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import {
  Theme,
  createStyles,
  withStyles,
  WithStyles
} from "@material-ui/core/styles";
import { FormLabel } from "@material-ui/core";
import { User } from "../Reducers/userListReducer";
import { connect } from "react-redux";
import { AddUser, UpdateUser } from "../Actions/User";
import { styles } from "../Utilities/FormDialogStyle";

interface Props extends WithStyles<typeof styles> {
  open: boolean;
  handleClose: any;
  user?: User;
  AddUser: Function;
  UpdateUser: Function;
}

class FormDialogBase extends React.Component<Props> {
  state = {
    user: {
      name: "",
      gender: "",
      birthDay: new Date()
    },
    errorName: false
  };

  UNSAFE_componentWillReceiveProps(nextProps: Props) {
    if (nextProps.user !== this.props.user) {
      this.setState({
        user: nextProps.user
      });
    }
  }

  handleNameChange = (event: SyntheticEvent<{}>) => {
    this.setState({
      user: {
        ...this.state.user,
        name: (event.target as HTMLInputElement).value
      },
      errorName: true
    });
  };

  handleDateChange = (date: Date) => {
    this.setState({
      user: {
        ...this.state.user,
        birthDay: date
      }
    });
  };

  handleGenderChange = (event: SyntheticEvent<{}>) => {
    this.setState({
      user: {
        ...this.state.user,
        gender: (event.target as HTMLInputElement).value
      }
    });
  };

  handleAdd = () => {
    if (this.state.user.name.length === 0) {
      this.setState({
        errorName: true
      });
    } else {
      this.props.AddUser(this.state.user);
      this.setState({
        user: {
          ...this.state.user,
          name: "",
          birthDay: new Date(),
          gender: ""
        }
      });
      this.props.handleClose();
    }
  };

  handleEdit = () => {
    if (this.state.user.name.length === 0) {
      this.setState({
        errorName: true
      });
    } else {
      this.props.UpdateUser(this.state.user);
      this.props.handleClose();
    }
  };

  render() {
    const { open, handleClose, classes } = this.props;
    const { user, errorName } = this.state;
    console.log(user);
    return (
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
          maxWidth={"sm"}
          fullWidth
        >
          <DialogTitle id="form-dialog-title">
            {this.props.user ? "Update User" : "Add user"}
          </DialogTitle>
          <DialogContent
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}
          >
            <TextField
              label="Name"
              className={classes.textField}
              value={user.name}
              onChange={this.handleNameChange}
              error={errorName === true}
              helperText={user.name.length > 0 ? "" : "Please provide a name"}
              margin="normal"
              variant="outlined"
            />
            <FormLabel
              className={classes.textField}
              component={"legend" as "ruby"}
              style={{ color: "#0000008a" }}
            >
              Gender
            </FormLabel>
            <RadioGroup
              aria-label="Gender"
              name="gender"
              className={classes.group}
              value={user.gender}
              onChange={this.handleGenderChange}
              style={{
                display: "flex",
                flexDirection: "row"
              }}
            >
              <FormControlLabel
                value="female"
                control={<Radio style={{ color: "#ab0f59" }} />}
                label="Female"
              />
              <FormControlLabel
                value="male"
                control={<Radio style={{ color: "#ab0f59" }} />}
                label="Male"
              />
              <FormControlLabel
                value="other"
                control={<Radio style={{ color: "#ab0f59" }} />}
                label="Other"
              />
            </RadioGroup>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DatePicker
                margin="normal"
                label="Date picker"
                className={classes.textField}
                value={user.birthDay}
                onChange={this.handleDateChange}
                variant="outlined"
                format="dd MMMM yyyy"
                maxDate={new Date()}
              />
            </MuiPickersUtilsProvider>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            {this.props.user ? (
              <Button onClick={this.handleEdit} color="primary">
                Edit
              </Button>
            ) : (
              <Button onClick={this.handleAdd} color="primary">
                Add
              </Button>
            )}
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export const FormDialog = withStyles(styles)(
  connect(
    null,
    { AddUser, UpdateUser }
  )(FormDialogBase)
);
