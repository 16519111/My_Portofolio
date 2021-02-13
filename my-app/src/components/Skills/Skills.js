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
                        A domain-specific language used in programming and designed for managing data held in a relational database management system. Skills : Data Manipulation Language, Data Definition Language
                    </Typography>
                    </CardContent>
                </CardActionArea>
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
                        MariaDB is a community-developed, commercially supported fork of the MySQL relational database management system. Skills : Data Manipulation Language, Data Definition Language
                    </Typography>
                    </CardContent>
                </CardActionArea>
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
                        MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.
                    </Typography>
                    </CardContent>
                </CardActionArea>
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
                        Firebase is a platform developed by Google for creating mobile and web applications. It was originally an independent company founded in 2011. Skills : Live API and Data Storage
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
        <Typography variant="h4" align="center" style={{marginTop: "6%"}}>Mobile Apps Development</Typography>
        <Divider style={{marginTop: "2%", marginLeft: "10%", marginRight: "10%", marginBottom: "2%"}}/>
        <div className={classes.flexRow} style={{marginLeft: "12.5%", marginRight: "12.5%"}}>
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
                        Java is a set of computer software and specifications  that provides a system for developing application software and deploying it in a cross-platform computing environment. Skills : OOP
                    </Typography>
                    </CardContent>
                </CardActionArea>
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
                        React Native is an open-source mobile application framework created by Facebook, Inc. This framework supports both Javascript and Typescript extensions. Skills : React Hooks, React Context, and many more
                    </Typography>
                    </CardContent>
                </CardActionArea>
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
                        Expo is a framework and a platform for universal React applications. It is a set of tools a that helps to develop, build, deploy, and quickly iterate on iOS, Android, and web apps codebase.
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
        <Typography variant="h4" align="center" style={{marginTop: "6%"}}>Data Science</Typography>
        <Divider style={{marginTop: "2%", marginLeft: "10%", marginRight: "10%", marginBottom: "2%"}}/>
        <div className={classes.flexRow} style={{marginLeft: "25%", marginRight: "25%"}}>
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
                        Python is an interpreted, high-level and general-purpose programming language. Skills : Basic Python and Sklearn (Machine Learning), Pandas, Matplotlib, Seaborn
                    </Typography>
                    </CardContent>
                </CardActionArea>
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
                        Kaggle, a subsidiary of Google LLC, is an online community of data scientists and machine learning practitioners. Skills : Kaggle Notebook and Databases
                    </Typography>
                    </CardContent>
                </CardActionArea>
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
                        C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope with a static type system. Skills : Data Structures and Algorithm, Assembly
                    </Typography>
                    </CardContent>
                </CardActionArea>
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
                        C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or "C with Classes". Skills : Object Oriented Programming (OOP)
                    </Typography>
                    </CardContent>
                </CardActionArea>
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
                        Linux is a family of open-source Unix-like operating systems based on the Linux kernel, an operating system kernel first released on September 17, 1991, by Linus Torvalds. Skills : Linux Shell
                    </Typography>
                    </CardContent>
                </CardActionArea>
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
                        Prolog is a logic programming language associated with artificial intelligence and computational linguistics. Skills : Facts, Rules, Queries, Lists, Loops, General Syntaxes
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
      </div>
    );
  }
  
  export default Skills;