import { Theme, createStyles } from "@material-ui/core/styles";

export const styles = (theme: Theme) =>
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
