import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { styles } from "../Utilities/HeaderStyle";
import { IconButton } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import { FormDialog } from "./FormDialog";
import { connect } from "react-redux";
import { PullSearchValue } from "../Actions/Search";

interface Props extends WithStyles<typeof styles> {
  PullSearchValue: Function;
}

class HeaderBase extends React.Component<Props> {
  state = {
    open: false,
    search: ""
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSearch = (event: React.SyntheticEvent<{}>) => {
    this.setState({
      search: (event.target as HTMLInputElement).value
    });
    this.props.PullSearchValue((event.target as HTMLInputElement).value);
  };

  render() {
    const { classes } = this.props;
    const { search, open } = this.state;
    return (
      <div className={classes.root}>
        <AppBar position="static" style={{ backgroundColor: "#ab0f59" }}>
          <Toolbar>
            <Typography
              className={classes.title}
              variant="h4"
              color="inherit"
              noWrap
            >
              Stority
            </Typography>
            <div className={classes.grow} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                value={search}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                onChange={this.handleSearch}
              />
            </div>
            <div>
              <IconButton color="inherit" onClick={this.handleClickOpen}>
                <Icon className={classes.icon} style={{ fontSize: 36 }}>
                  add_circle
                </Icon>
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        <FormDialog open={open} handleClose={this.handleClose} />
      </div>
    );
  }
}

export const Header = withStyles(styles)(
  connect(
    null,
    { PullSearchValue }
  )(HeaderBase)
);
