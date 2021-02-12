import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Button, Typography, Paper, Hidden, Divider, Card, CardActionArea, CardActions, CardContent, CardMedia } from "@material-ui/core";
import ReactPicture from "../../images/React.png";
import NextPicture from "../../images/Next.png";
import MaterialPicture from "../../images/Material.png";
import BootstrapPicture from "../../images/Bootstrap.png";
import MySQLPicture from "../../images/MySQL.png";
import MariaDBPicture from "../../images/MariaDB.png";
import MongoDBPicture from "../../images/MongoDB.png";
import FirebasePicture from "../../images/Firebase.png";
import PythonPicture from "../../images/Python.png";
import KagglePicture from "../../images/Kaggle.png";
import CPicture from "../../images/C.png";
import CPPPicture from "../../images/CPP.png";
import LinuxPicture from "../../images/Linux.png";
import PrologPicture from "../../images/Prolog.png";
import JavaPicture from "../../images/Java.png";
import NativePicture from "../../images/ReactNative.png";
import ExpoPicture from "../../images/Expo.png";

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
    },
    flexRow: {
        display: "flex",
        flexDirection: "row"
    },
    rootCard: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2)
    },
    flexRowAvatar: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    },
    avatar: {
        width: "80px",
        height: "80px",
        marginTop: "2%",
        marginBottom: "1.5%"
    },
  }));

function Skills() {
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <Typography variant="h4" align="center" style={{marginTop: "2%"}}>Frontend Web Development</Typography>
        <Divider style={{marginTop: "2%", marginLeft: "10%", marginRight: "10%", marginBottom: "2%"}}/>
        <div className={classes.flexRow}>
            <Card className={classes.rootCard}>
                <CardActionArea>
                    <div className={classes.flexRowAvatar}>
                        <Avatar alt="Remy Sharp" src={ReactPicture} className={classes.avatar}/>
                    </div>
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        React.Js
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        One of the most popular open source JavaScript library for frontend development. Skills : React Hooks, React Context, React Redux, and many more
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Share
                    </Button>
                    <Button size="small" color="primary">
                    Learn More
                    </Button>
                </CardActions>
            </Card>
            <Card className={classes.rootCard}>
                <CardActionArea>
                    <div className={classes.flexRowAvatar}>
                        <Avatar alt="Remy Sharp" src={NextPicture} className={classes.avatar}/>
                    </div>
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Next.Js
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        A open source React Framework which enables server side rendering and generating static Websites. Skills : Next Link, Next Image, Next Head, and many more
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Share
                    </Button>
                    <Button size="small" color="primary">
                    Learn More
                    </Button>
                </CardActions>
            </Card>
            <Card className={classes.rootCard}>
                <CardActionArea>
                    <div className={classes.flexRowAvatar}>
                        <Avatar alt="Remy Sharp" src={MaterialPicture} className={classes.avatar}/>
                    </div>
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Material UI
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Material UI provides React components for faster and easier web development. Skills : Accordion, Tabs, Steppers, Grid, Paper, Paper, Typography, and many more
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Share
                    </Button>
                    <Button size="small" color="primary">
                    Learn More
                    </Button>
                </CardActions>
            </Card>
            <Card className={classes.rootCard}>
                <CardActionArea>
                    <div className={classes.flexRowAvatar}>
                        <Avatar alt="Remy Sharp" src={BootstrapPicture} className={classes.avatar}/>
                    </div>
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Bootstrap
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        A free and open-source CSS framework directed at responsive, mobile-first front-end web development. Skills : Accordion, Navbar, Pagination, and many more
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Share
                    </Button>
                    <Button size="small" color="primary">
                    Learn More
                    </Button>
                </CardActions>
            </Card>
        </div>
        <Typography variant="h4" align="center" style={{marginTop: "6%"}}>Backend Web Development</Typography>
        <Divider style={{marginTop: "2%", marginLeft: "10%", marginRight: "10%", marginBottom: "2%"}}/>
        <div className={classes.flexRow}>
            <Card className={classes.rootCard}>
                <CardActionArea>
                    <div className={classes.flexRowAvatar}>
                        <Avatar alt="Remy Sharp" src={MySQLPicture} className={classes.avatar}/>
                    </div>
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        MySQL
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Share
                    </Button>
                    <Button size="small" color="primary">
                    Learn More
                    </Button>
                </CardActions>
            </Card>
            <Card className={classes.rootCard}>
                <CardActionArea>
                    <div className={classes.flexRowAvatar}>
                        <Avatar alt="Remy Sharp" src={MariaDBPicture} className={classes.avatar}/>
                    </div>
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        MariaDB
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Share
                    </Button>
                    <Button size="small" color="primary">
                    Learn More
                    </Button>
                </CardActions>
            </Card>
            <Card className={classes.rootCard}>
                <CardActionArea>
                    <div className={classes.flexRowAvatar}>
                        <Avatar alt="Remy Sharp" src={MongoDBPicture} className={classes.avatar}/>
                    </div>
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        MongoDB
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Share
                    </Button>
                    <Button size="small" color="primary">
                    Learn More
                    </Button>
                </CardActions>
            </Card>
            <Card className={classes.rootCard}>
                <CardActionArea>
                    <div className={classes.flexRowAvatar}>
                        <Avatar alt="Remy Sharp" src={FirebasePicture} className={classes.avatar}/>
                    </div>
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Firebase
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Share
                    </Button>
                    <Button size="small" color="primary">
                    Learn More
                    </Button>
                </CardActions>
            </Card>
        </div>
        <Typography variant="h4" align="center" style={{marginTop: "6%"}}>Mobile Apps Development</Typography>
        <Divider style={{marginTop: "2%", marginLeft: "10%", marginRight: "10%", marginBottom: "2%"}}/>
        <div className={classes.flexRow}>
            <Card className={classes.rootCard}>
                <CardActionArea>
                    <div className={classes.flexRowAvatar}>
                        <Avatar alt="Remy Sharp" src={JavaPicture} className={classes.avatar}/>
                    </div>
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Java
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Share
                    </Button>
                    <Button size="small" color="primary">
                    Learn More
                    </Button>
                </CardActions>
            </Card>
            <Card className={classes.rootCard}>
                <CardActionArea>
                    <div className={classes.flexRowAvatar}>
                        <Avatar alt="Remy Sharp" src={ReactPicture} className={classes.avatar}/>
                    </div>
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        React Native
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Share
                    </Button>
                    <Button size="small" color="primary">
                    Learn More
                    </Button>
                </CardActions>
            </Card>
            <Card className={classes.rootCard}>
                <CardActionArea>
                    <div className={classes.flexRowAvatar}>
                        <Avatar alt="Remy Sharp" src={ExpoPicture} className={classes.avatar}/>
                    </div>
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Expo
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Share
                    </Button>
                    <Button size="small" color="primary">
                    Learn More
                    </Button>
                </CardActions>
            </Card>
            <Card className={classes.rootCard}>
                <CardActionArea>
                    <div className={classes.flexRowAvatar}>
                        <Avatar alt="Remy Sharp" src={FirebasePicture} className={classes.avatar}/>
                    </div>
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Firebase
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Share
                    </Button>
                    <Button size="small" color="primary">
                    Learn More
                    </Button>
                </CardActions>
            </Card>
        </div>
        <Typography variant="h4" align="center" style={{marginTop: "6%"}}>Data Science</Typography>
        <Divider style={{marginTop: "2%", marginLeft: "10%", marginRight: "10%", marginBottom: "2%"}}/>
        <div className={classes.flexRow}>
            <Card className={classes.rootCard}>
                <CardActionArea>
                    <div className={classes.flexRowAvatar}>
                        <Avatar alt="Remy Sharp" src={PythonPicture} className={classes.avatar}/>
                    </div>
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Python
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Share
                    </Button>
                    <Button size="small" color="primary">
                    Learn More
                    </Button>
                </CardActions>
            </Card>
            <Card className={classes.rootCard}>
                <CardActionArea>
                    <div className={classes.flexRowAvatar}>
                        <Avatar alt="Remy Sharp" src={KagglePicture} className={classes.avatar}/>
                    </div>
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Kaggle
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Share
                    </Button>
                    <Button size="small" color="primary">
                    Learn More
                    </Button>
                </CardActions>
            </Card>
            <Card className={classes.rootCard}>
                <CardActionArea>
                    <div className={classes.flexRowAvatar}>
                        <Avatar alt="Remy Sharp" src={MongoDBPicture} className={classes.avatar}/>
                    </div>
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        MongoDB
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Share
                    </Button>
                    <Button size="small" color="primary">
                    Learn More
                    </Button>
                </CardActions>
            </Card>
            <Card className={classes.rootCard}>
                <CardActionArea>
                    <div className={classes.flexRowAvatar}>
                        <Avatar alt="Remy Sharp" src={FirebasePicture} className={classes.avatar}/>
                    </div>
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Firebase
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Share
                    </Button>
                    <Button size="small" color="primary">
                    Learn More
                    </Button>
                </CardActions>
            </Card>
        </div>
        <Typography variant="h4" align="center" style={{marginTop: "6%"}}>Computer Science</Typography>
        <Divider style={{marginTop: "2%", marginLeft: "10%", marginRight: "10%", marginBottom: "2%"}}/>
        <div className={classes.flexRow}>
            <Card className={classes.rootCard}>
                <CardActionArea>
                    <div className={classes.flexRowAvatar}>
                        <Avatar alt="Remy Sharp" src={CPicture} className={classes.avatar}/>
                    </div>
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        C
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Share
                    </Button>
                    <Button size="small" color="primary">
                    Learn More
                    </Button>
                </CardActions>
            </Card>
            <Card className={classes.rootCard}>
                <CardActionArea>
                    <div className={classes.flexRowAvatar}>
                        <Avatar alt="Remy Sharp" src={CPPPicture} className={classes.avatar}/>
                    </div>
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        C++
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Share
                    </Button>
                    <Button size="small" color="primary">
                    Learn More
                    </Button>
                </CardActions>
            </Card>
            <Card className={classes.rootCard}>
                <CardActionArea>
                    <div className={classes.flexRowAvatar}>
                        <Avatar alt="Remy Sharp" src={LinuxPicture} className={classes.avatar}/>
                    </div>
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Linux OS
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Share
                    </Button>
                    <Button size="small" color="primary">
                    Learn More
                    </Button>
                </CardActions>
            </Card>
            <Card className={classes.rootCard}>
                <CardActionArea>
                    <div className={classes.flexRowAvatar}>
                        <Avatar alt="Remy Sharp" src={PrologPicture} className={classes.avatar}/>
                    </div>
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Prolog
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Share
                    </Button>
                    <Button size="small" color="primary">
                    Learn More
                    </Button>
                </CardActions>
            </Card>
        </div>
      </div>
    );
  }
  
  export default Skills;