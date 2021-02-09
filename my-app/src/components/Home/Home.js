import Jumbotron from "./Jumbotron";
import { makeStyles } from '@material-ui/core/styles';

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
    title: {
      color: "black"
    },
    navbarTitle: {
      marginLeft: theme.spacing(3),
      color: "black",
      '&:hover': {
          cursor: "pointer"
       },
    }
  }));

function Home() {
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <Jumbotron/>
      </div>
    );
  }
  
  export default Home;