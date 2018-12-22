import { createStyles, Theme } from "@material-ui/core/styles";

export const styles = (theme: Theme) =>
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
