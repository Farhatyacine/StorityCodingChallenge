import React, { SyntheticEvent } from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { UserCard } from "./Card";
import { FormControl, Button } from "@material-ui/core";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import { connect } from "react-redux";
import { User } from "../Reducers/userListReducer";
import _ from "lodash";
import moment from "moment";
import Icon from "@material-ui/core/Icon";
import { styles } from "../Utilities/BodyStyle";
import { FormDialog } from "./FormDialog";
import { UserToEdit } from "../Actions/User";

interface Props extends WithStyles<typeof styles> {
  userList?: User[];
  open: boolean;
  searchValue: string;
  UserToEdit: Function;
  userToEdit: User;
}

class BodyBase extends React.Component<Props> {
  state = {
    gender: "",
    birthDaySort: "",
    users: [],
    searchValue: "",
    openEdit: false
  };

  UNSAFE_componentWillReceiveProps(nextProps: Props) {
    if (nextProps.userList !== this.props.userList) {
      this.setState({
        users: nextProps.userList
      });
    }
    if (nextProps.searchValue !== this.props.searchValue) {
      this.setState({
        users: _.filter(this.props.userList, (user: User) => {
          return _.lowerCase(user.name).includes(
            _.lowerCase(nextProps.searchValue)
          );
        })
      });
    }
  }

  handleGenderChange = (event: SyntheticEvent<{}>) => {
    this.state.birthDaySort === ""
      ? this.setState({
          gender: (event.target as HTMLInputElement).value,
          users: _.filter(this.props.userList, (user: User) => {
            return user.gender === (event.target as HTMLInputElement).value;
          })
        })
      : this.state.birthDaySort === "Ascendant"
      ? this.setState({
          gender: (event.target as HTMLInputElement).value,
          users: _.sortBy(this.props.userList, function(o) {
            return moment(o.birthDay).format("YYYYMMDD");
          })
            .reverse()
            .filter((user: User) => {
              return user.gender === (event.target as HTMLInputElement).value;
            })
        })
      : this.setState({
          gender: (event.target as HTMLInputElement).value,
          users: _.sortBy(this.props.userList, function(o) {
            return moment(o.birthDay).format("YYYYMMDD");
          }).filter((user: User) => {
            return user.gender === (event.target as HTMLInputElement).value;
          })
        });
  };

  handleBDChange = (event: SyntheticEvent<{}>) => {
    const val = (event.target as HTMLInputElement).value;
    this.state.gender === ""
      ? this.setState({
          birthDaySort: val,
          users:
            val === "Ascendant"
              ? _.sortBy(this.props.userList, function(o) {
                  return moment(o.birthDay).format("YYYYMMDD");
                }).reverse()
              : _.sortBy(this.props.userList, function(o) {
                  return moment(o.birthDay).format("YYYYMMDD");
                })
        })
      : this.setState({
          birthDaySort: val,
          users:
            val === "Ascendant"
              ? _.sortBy(this.state.users, function(o: User) {
                  return moment(o.birthDay).format("YYYYMMDD");
                }).reverse()
              : _.sortBy(this.state.users, function(o: User) {
                  return moment(o.birthDay).format("YYYYMMDD");
                })
        });
  };

  handleAllChange = () => {
    this.setState({
      gender: "",
      birthDaySort: "",
      users: this.props.userList
    });
  };

  handleCloseEditDialog = () => {
    this.setState({
      openEdit: false
    });
  };

  handleOpenEditDialog = (user: User) => {
    this.props.UserToEdit(user);
    this.setState({
      openEdit: true
    });
  };

  render() {
    const { classes, userList } = this.props;
    const { users } = this.state;
    let usersListIsEmpty: boolean = _.isEmpty(userList);
    console.log(this.props.userToEdit);
    return (
      <div>
        {this.props.open ? (
          <Typography
            component="h2"
            variant="h2"
            style={{ textAlign: "center" }}
          >
            Insert users
          </Typography>
        ) : (
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
                {usersListIsEmpty ? (
                  <Typography component="h5" variant="h5">
                    Please press the
                    <Icon className={classes.icon} style={{ fontSize: 36 }}>
                      add_circle
                    </Icon>
                    button
                  </Typography>
                ) : (
                  _.map(users, (user: User) => (
                    <UserCard
                      key={user._id}
                      user={user}
                      handleClose={this.handleCloseEditDialog}
                      handleOpen={this.handleOpenEditDialog}
                      open={this.state.openEdit}
                    />
                  ))
                )}
              </Paper>
            </Grid>
          </Grid>
        )}
        <FormDialog
          open={this.state.openEdit}
          handleClose={this.handleCloseEditDialog}
          user={this.props.userToEdit}
        />
      </div>
    );
  }
}

function mapStateToProps(props: Props) {
  console.log(props);
  return {
    userList: props.userList,
    searchValue: props.searchValue,
    userToEdit: props.userToEdit
  };
}

export let Body = withStyles(styles)(
  connect(
    mapStateToProps,
    { UserToEdit }
  )(BodyBase)
);
