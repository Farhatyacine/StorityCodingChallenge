import * as React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Delete from "@material-ui/icons/Delete";
import Edit from "@material-ui/icons/Edit";
import { User } from "../Reducers/userListReducer";
import { connect } from "react-redux";
import { DeleteUser } from "../Actions/User";
import moment from "moment";
import _ from "lodash";
import { styles } from "../Utilities/CardStyle";

interface Props extends WithStyles<typeof styles> {
  user: User;
  searchValue: string;
  DeleteUser: Function;
  handleClose: any;
  handleOpen: any;
  open: boolean;
}

class UserCardBase extends React.Component<Props> {
  handleBlodName() {
    return this.props.searchValue.length > 0 ? (
      <Typography
        component="h5"
        variant="h5"
        dangerouslySetInnerHTML={{
          __html: this.boldString(this.props.user.name, this.props.searchValue)
        }}
      />
    ) : (
      <Typography component="h5" variant="h5">
        {this.props.user.name}
      </Typography>
    );
  }

  boldString(str: string, find: string) {
    let re = new RegExp(find, "g");
    console.log(_.startsWith(str, _.upperFirst(find)), str);
    return _.startsWith(str, _.upperFirst(find))
      ? str.replace(_.upperFirst(find), _.upperFirst(find).bold())
      : str.replace(re, find.bold());
  }

  handleDelete() {
    console.log(this.props);
    this.props.DeleteUser(this.props.user);
  }

  render() {
    const { classes, handleOpen, user } = this.props;
    return (
      <div>
        <Card className={classes.card}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              {this.handleBlodName()}
              <Typography variant="subtitle1" color="textSecondary">
                {user.gender}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {moment(user.birthDay).format("DD MMMM YYYY")}
              </Typography>
            </CardContent>
            <div className={classes.controls}>
              <IconButton
                aria-label="Delete"
                onClick={() => this.handleDelete()}
              >
                <Delete className={classes.playIcon} />
              </IconButton>
              <IconButton aria-label="Update" onClick={() => handleOpen(user)}>
                <Edit className={classes.playIcon} />
              </IconButton>
            </div>
          </div>
          <CardMedia
            className={classes.cover}
            image={user.image}
            title={user.name}
          />
        </Card>
      </div>
    );
  }
}

function mapStateToProps(props: Props) {
  return { searchValue: props.searchValue };
}

export const UserCard = withStyles(styles)(
  connect(
    mapStateToProps,
    { DeleteUser }
  )(UserCardBase)
);
