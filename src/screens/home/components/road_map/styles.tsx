import { makeStyles } from "@material-ui/core/styles";

export const useStyles = () => {
  const styles = makeStyles((theme) => {
    return {
      root: {
        "& h5": {
          fontFamily: "Poppins Extra Bold",
          fontWeight: 700,
          fontSize: theme.spacing(8),
          background:
            "conic-gradient(from 177.63deg at 33.98% 18.71%, #FFB800 -41.25deg, #FFA800 37.5deg, #FF3E9A 157.5deg, #F45511 190.96deg, #FFB800 318.75deg, #FFA800 397.5deg)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
          paddingBottom: theme.spacing(9.5),
        },
        "& h3": {
          fontFamily: "Poppins Extra Bold",
          fontSize: "40px",
          paddingBottom: theme.spacing(3),
          background:
            "conic-gradient(from 177.63deg at 33.98% 18.71%, #FFB800 -41.25deg, #FFA800 37.5deg, #FF3E9A 157.5deg, #F45511 190.96deg, #FFB800 318.75deg, #FFA800 397.5deg)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
        },
      },
    };
  })();
  return styles;
};
