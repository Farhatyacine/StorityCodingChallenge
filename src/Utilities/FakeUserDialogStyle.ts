import { createStyles, Theme } from "@material-ui/core/styles";

export const styles = (theme: Theme) =>
  createStyles({
    slider: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      padding: "22px 0px"
    }
  });
