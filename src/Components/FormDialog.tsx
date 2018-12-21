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

const styles = (theme: Theme) =>
  createStyles({
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit
    },
    group: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit
    }
  });

interface Props extends WithStyles<typeof styles> {
  open: boolean;
  handleClose: any;
  name?: string;
  selectedDate?: Date;
  gender?: string;
}

class FormDialogBase extends React.Component<Props> {
  state = {
    name: this.props.name ? this.props.name : "",
    selectedDate: this.props.selectedDate
      ? this.props.selectedDate
      : new Date(),
    gender: this.props.gender ? this.props.gender : ""
  };

  handleNameChange = (event: SyntheticEvent<{}>) => {
    this.setState({
      name: (event.target as HTMLInputElement).value
    });
  };

  handleDateChange = (date: Date) => {
    console.log(date);
    this.setState({ selectedDate: date });
  };

  handleGenderChange = (event: SyntheticEvent<{}>) => {
    event.persist();
    this.setState({ gender: (event.target as HTMLInputElement).value });
  };

  render() {
    const { open, handleClose, classes, selectedDate } = this.props;
    return (
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
          maxWidth={"sm"}
          fullWidth
        >
          <DialogTitle id="form-dialog-title">Add user</DialogTitle>
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
              value={this.state.name}
              onChange={this.handleNameChange}
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
              value={this.state.gender}
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
                value={this.state.selectedDate}
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
            <Button onClick={handleClose} color="primary">
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export const FormDialog = withStyles(styles)(FormDialogBase);
