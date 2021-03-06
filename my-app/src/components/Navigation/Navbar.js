import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 4,
  },
  navbarColor: {
    backgroundColor: "transparent",
    boxShadow: "0px white"
  },
  navbarFlex: {
    boxShadow: "0px white"
  },
  menuButton: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(2)
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
  navbarTitleText: {
    fontWeight: "bold",
    color: "black"
  },
  myPortofolio: {
    marginLeft: theme.spacing(3),
    fontWeight: "bold",
    color: "black",
  },
  link: {
    textDecoration: "none"
  }
}));

function Navbar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navbarColor} elevation={0}>
        <Toolbar className={classes.navbarFlex}>
          <Typography variant="subtitle1" className={classes.myPortofolio}>
            MY PORTOFOLIO
          </Typography>
          <div className={classes.grow}/>
          <a href="/" className={classes.link}>
            <Button className={classes.navbarTitle}>
                <Typography variant="subtitle1" className={classes.navbarTitleText}>
                    PROFILE
                </Typography>
            </Button>
          </a>
          <a href="/skills" className={classes.link}>
            <Button className={classes.navbarTitle}>
                <Typography variant="subtitle1" className={classes.navbarTitleText}>
                    SKILLS
                </Typography>
            </Button>
          </a>
          <a href="/projects" className={classes.link}>
            <Button className={classes.navbarTitle}>
              <Typography variant="subtitle1" className={classes.navbarTitleText}>
                  PROJECTS
              </Typography>
            </Button>
          </a>
          <a href="/experiences" className={classes.link}>
            <Button className={classes.navbarTitle}>
              <Typography variant="subtitle1" className={classes.navbarTitleText}>
                  EXPERIENCE
              </Typography>
            </Button>
          </a>
          <IconButton edge="start" className={classes.menuButton} aria-label="menu">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
