import { makeStyles } from "@material-ui/core/styles";

export const useStyles = () => {
  const styles = makeStyles((theme) => {
    return {
      root: {
        width: "1200px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      },
      logo: {
        width: theme.spacing(17),
        "&:hover": {
          cursor: "pointer",
        },
      },
      items: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        fontWeight: 500,
        "& a": {
          color: "rgba(237, 108, 83, 1)",
          "&:hover": {
            background: "rgba(237, 108, 83, 0.2)",
            borderRadius: theme.spacing(0.5),
          },
        },
        "& .active": { color: "rgba(237, 108, 83, 1)" },
      },
      a: {
        lineHeight: 0,
        zIndex: 200,
      },
    };
  })();

  return styles;
};
