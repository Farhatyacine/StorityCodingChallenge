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

const styles = (theme: Theme) =>
  createStyles({
    card: {
      display: "flex",
      maxWidth: 400,
      maxHeight: 200
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
      width: 170
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

interface Props extends WithStyles<typeof styles> {}

class UserCardBase extends React.Component<Props> {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Card className={classes.card}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                Live From Space
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Mac Miller
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Mac Miller
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
            image="https://img.icons8.com/color/1600/circled-user-male-skin-type-1-2.png"
            title="Yacine Farhat"
          />
        </Card>
      </div>
    );
  }
}

export const UserCard = withStyles(styles)(UserCardBase);
