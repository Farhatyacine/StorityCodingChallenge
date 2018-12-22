import { createStyles, Theme } from "@material-ui/core/styles";

export const styles = (theme: Theme) =>
  createStyles({
    container: {
      display: "grid",
      gridTemplateColumns: "repeat(12, 1fr)",
      gridGap: `${theme.spacing.unit * 3}px`
    },
    progress: {
      margin: theme.spacing.unit * 2
    },
    paper: {
      padding: theme.spacing.unit * 4,
      color: theme.palette.text.secondary,
      whiteSpace: "nowrap",
      marginBottom: theme.spacing.unit,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      flexWrap: "wrap"
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
    },
    icon: {
      margin: theme.spacing.unit * 1
    }
  });
