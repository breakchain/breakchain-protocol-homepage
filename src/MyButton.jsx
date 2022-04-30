import { Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  button: {
    backgroundColor: "#32CBFF",
    color: "white",
    border: "1px solid #32CBFF",
    fontFamily:"poppins",
    "&:hover": {
      backgroundColor: "#fff !important",
      color: "#32CBFF",
    },
  }
  
  
}));

const MyButton = ({ href, name, handleClick }) => {
  const classes = useStyles();
  return (
    <Button
      variant="contained"
      id="my-button"
      className={classes.button}
      href={href}
      onClick={handleClick}
      target={`_self`}
    >
      <Typography>{name}</Typography>
    </Button>
  );
};

export default MyButton;
