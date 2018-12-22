import * as React from "react";
import {
  withStyles,
  Theme,
  createStyles,
  WithStyles
} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Delete from "@material-ui/icons/Delete";
import Edit from "@material-ui/icons/Edit";
import { User } from "../Reducers/userListReducer";
import moment from "moment";

const styles = (theme: Theme) =>
  createStyles({
    card: {
      display: "flex",
      width: 350,
      height: 200,
      margin: theme.spacing.unit
    },
    details: {
      display: "flex",
      flexDirection: "column"
    },
    content: {
      flex: "1 0 auto",
      textAlign: "left"
    },
    cover: {
      width: 200,
      borderRadius: "50%"
    },
    controls: {
      display: "flex",
      alignItems: "center",
      paddingLeft: theme.spacing.unit,
      paddingBottom: theme.spacing.unit
    },
    playIcon: {
      height: 38,
      width: 38
    }
  });

interface Props extends WithStyles<typeof styles> {
  user: User;
}

class UserCardBase extends React.Component<Props> {
  render() {
    const { classes, user } = this.props;

    return (
      <div>
        <Card className={classes.card}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                {user.name}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {user.gender}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {moment(user.birthDay).format("DD MMMM YYYY")}
              </Typography>
            </CardContent>
            <div className={classes.controls}>
              <IconButton aria-label="Delete">
                <Delete className={classes.playIcon} />
              </IconButton>
              <IconButton aria-label="Update">
                <Edit className={classes.playIcon} />
              </IconButton>
            </div>
          </div>
          <CardMedia
            className={classes.cover}
            image={user.image}
            title="Yacine Farhat"
          />
        </Card>
      </div>
    );
  }
}

export const UserCard = withStyles(styles)(UserCardBase);
