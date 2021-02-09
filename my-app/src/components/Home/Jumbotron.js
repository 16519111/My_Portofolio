import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
  }
}));

function Navbar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography color="textSecondary">Hello I'm</Typography>
      <Typography className={classes.nameBold}>Gregorius Dimas Baskara</Typography>
      <Typography>Web Developer</Typography>
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
          Contact Me
      </Button>
      <Button>
          See My Resume
      </Button>
    </div>
  );
}

export default Navbar;