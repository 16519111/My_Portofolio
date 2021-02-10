import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import DimasPicture from "../../images/Dimas.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  grow: {
    flexGrow: 4,
  },
  navbarColor: {
    backgroundColor: "transparent",
  },
  navbarFlex: {
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "row"
  },
  menuButton: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(2)
  },
  socialButton: {

  },
  title: {
    color: "black"
  },
  navbarTitle: {
    marginLeft: theme.spacing(3),
    color: "black",
    '&:hover': {
        cursor: "pointer"
     },
  },
  nameBold: {
    fontWeight: "bold"
  },
  jumboimg: {
    width: "300px",
    height: "420px"
  }
}));

function Navbar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
      <Typography variant="h6" color="textSecondary">Hello I'm</Typography>
      <Typography variant="h6" className={classes.nameBold}>Gregorius Dimas Baskara</Typography>
      <Typography variant="h6">Web Developer</Typography>
      <div>
        <IconButton edge="start" className={classes.socialButton} aria-label="menu">
            <LinkedInIcon />
        </IconButton>
        <IconButton edge="start" className={classes.socialButton} aria-label="menu">
            <GitHubIcon />
        </IconButton>
        <IconButton edge="start" className={classes.socialButton} aria-label="menu">
            <FacebookIcon />
        </IconButton>
        <IconButton edge="start" className={classes.socialButton} aria-label="menu">
            <InstagramIcon />
        </IconButton>
        <IconButton edge="start" className={classes.socialButton} aria-label="menu">
            <TwitterIcon />
        </IconButton>
      </div>
      <Button>
        <Typography variant="h6">
          Contact Me
        </Typography>
      </Button>
      <Button>
        <Typography variant="h6">
          See My Resume
        </Typography>
      </Button>
      </div>
      <img src={DimasPicture} className={classes.jumboimg}/>
    </div>
  );
}

export default Navbar;