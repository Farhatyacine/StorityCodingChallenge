import React, { SyntheticEvent, ChangeEvent } from "react";
import {
  withStyles,
  Theme,
  createStyles,
  WithStyles
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { UserCard } from "./Card";
import { FormControl, Button } from "@material-ui/core";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";

const styles = (theme: Theme) =>
  createStyles({
    container: {
      display: "grid",
      gridTemplateColumns: "repeat(12, 1fr)",
      gridGap: `${theme.spacing.unit * 3}px`
    },
    paper: {
      padding: theme.spacing.unit,
      textAlign: "center",
      color: theme.palette.text.secondary,
      whiteSpace: "nowrap",
      marginBottom: theme.spacing.unit
    },
    divider: {
      margin: `${theme.spacing.unit * 2}px 0`
    },
    formControl: {
      margin: theme.spacing.unit * 1.5
    },
    group: {
      margin: `${theme.spacing.unit}px 0`
    },
    button: {
      margin: theme.spacing.unit
    }
  });

interface Props extends WithStyles<typeof styles> {}

class BodyBase extends React.Component<Props> {
  state = {
    gender: "",
    birthDaySort: ""
  };

  handleGenderChange = (event: SyntheticEvent<{}>) => {
    event.persist();
    console.log((event.target as HTMLInputElement).value);
    this.setState({ gender: (event.target as HTMLInputElement).value });
  };

  handleBDChange = (event: SyntheticEvent<{}>) => {
    event.persist();
    console.log((event.target as HTMLInputElement).value);
    this.setState({ birthDaySort: (event.target as HTMLInputElement).value });
  };

  handleAllChange = () => {
    this.setState({
      gender: "",
      birthDaySort: ""
    });
  };
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Grid container spacing={8}>
          <Grid item xs={2} style={{ textAlign: "left" }}>
            <Typography component="h5" variant="h5">
              Filter Results
            </Typography>
            <FormControl
              component={"fieldset" as "div"}
              className={classes.formControl}
            >
              <FormLabel
                component={"legend" as "ruby"}
                style={{ color: "#0000008a" }}
              >
                By Gender
              </FormLabel>
              <RadioGroup
                aria-label="Gender"
                name="gender"
                className={classes.group}
                value={this.state.gender}
                onChange={this.handleGenderChange}
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
              <FormLabel
                component={"legend" as "small"}
                style={{ color: "#0000008a" }}
              >
                By Birth Day
              </FormLabel>
              <RadioGroup
                aria-label="birthDay"
                name="birthDay"
                className={classes.group}
                value={this.state.birthDaySort}
                onChange={this.handleBDChange}
              >
                <FormControlLabel
                  value="Ascendant"
                  control={<Radio style={{ color: "#ab0f59" }} />}
                  label="Ascendant"
                />
                <FormControlLabel
                  value="Descendants"
                  control={<Radio style={{ color: "#ab0f59" }} />}
                  label="Descendants"
                />
              </RadioGroup>
              <Button
                className={classes.button}
                style={{ color: "#0000008a" }}
                onClick={this.handleAllChange}
              >
                Get all
              </Button>
            </FormControl>
          </Grid>
          <Grid item xs={10}>
            <Paper className={classes.paper}>
              <UserCard />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export let Body = withStyles(styles)(BodyBase);
