import { Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import arrow_icon from './assets/images/arrow.png'

const useStyles = makeStyles(theme => ({
  button: {
    backgroundColor: "#32CBFF",
    color: "white",
    border: "1px solid #32CBFF !important",
    fontFamily:"poppins",
    "&:hover": {
      color: "white",
    },
  }
  
  
}));



const RoundButton = ({ href, name, handleClick }) => {
  const classes = useStyles();
  return (
  <Button className={classes.button} sx={{backgroundColor:"#32CBFF",borderRadius:"50px"}}  onClick={handleClick} href={href} target={`_self`}>
    <img src={arrow_icon}></img>
  </Button>
  )
}
// const RoundButton = ({ href, name, handleClick }) => {
//   const classes = useStyles();
//   return (
//     <Button
//       variant="contained"
//       id="my-button"
//       className={classes.button}
//       href={href}
//       onClick={handleClick}
//       target={`_self`}
//     >
//       <Typography>{name}</Typography>
//     </Button>
//   );
// };

export default RoundButton;
