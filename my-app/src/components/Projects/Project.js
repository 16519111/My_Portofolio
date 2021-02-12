import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Accordion, AccordionDetails, AccordionSummary, Typography, Divider, Avatar, Grid, Paper, Button, IconButton } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SXCPicture from "../../images/SXC.png";
import JLogoPicture from "../../images/Logo.ico";
import GamePicture from "../../images/Game.png";
import ArkavidiaPicture from "../../images/Arkavidia.png";
import ReactPicture from "../../images/React.png";
import PythonPicture from "../../images/Python.png";
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import DataUsageIcon from '@material-ui/icons/DataUsage';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    avatar: {
        width: "100px",
        height: "100px",
    },
    flexRowAvatar: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around"
    },
    paper: {
        padding: "20px",
        marginTop: "10px",
        marginBottom: "10px",
        display: "flex",
        flexDirection: "row",
        flex: "1"
    }
  }));

function Projects() {
    const classes = useStyles();
    const [topic, setTopic] = React.useState(1)

    const handleChangeTopic = (topic) => {
        setTopic(topic)
    }   

    return (
      <div className={classes.root}>
        <Typography variant="h4" align="center" style={{marginTop: "2%"}}>
            {(topic === 1) ? "Websites" : (topic === 2) ? "Mobile Apps" : "Data Science"}
        </Typography>
        <div style={{display: "flex", justifyContent: "flex-end", marginLeft: "10%", marginRight: "10%", marginTop: "2%"}}>
            <Tooltip title="Websites">
                <IconButton aria-label="delete" onClick={() => handleChangeTopic(1)}>
                    <LaptopMacIcon />
                </IconButton>
            </Tooltip>
            <Tooltip title="Mobile Apps">
                <IconButton aria-label="delete" onClick={() => handleChangeTopic(2)}>
                    <PhoneAndroidIcon />
                </IconButton>
            </Tooltip>
            <Tooltip title="Data Science">
                <IconButton aria-label="delete" onClick={() => handleChangeTopic(3)}>
                    <DataUsageIcon />
                </IconButton>
            </Tooltip>
        </div>
        <Divider style={{marginTop: "0%", marginLeft: "10%", marginRight: "10%", marginBottom: "2%"}}/>
        {(topic === 1) ?
            <>
                <Grid container className={classes.flexRowAvatar}>
                    <Grid item xs={2}></Grid>
                    <Grid item container xs={8} className={classes.flexRowAvatar}>
                        <Paper className={classes.paper}>
                            <Grid container direction="row" alignItems="center">
                                <Grid item xs={2}>
                                    <Avatar alt="Remy Sharp" src={SXCPicture} className={classes.avatar}/>
                                </Grid>
                                <Grid item style={{}} xs={10}>
                                    <Typography variant="h6" style={{fontWeight: "bold"}} gutterBottom>StudentxCEOs 10th Grand Summit</Typography>
                                    <Typography variant="body2">A Website made with React.js Library and Next.js Framework. Consists of 6 pages : 1 Landing Page, 1 About Page, and 4 Event Pages. Built with a Navbar, a Footer, and overall responsive components. Available in dual language mode : Bahasa Indonesia and English (Made with React Context). Connected to a google Calendar and google Spreadsheet API</Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={2}></Grid>
                </Grid>
                <Divider style={{marginTop: "1.5%", marginLeft: "30%", marginRight: "30%", marginBottom: "1.5%"}}/>
                <Grid container className={classes.flexRowAvatar}>
                    <Grid item xs={2}></Grid>
                    <Grid item container xs={8} className={classes.flexRowAvatar}>
                        <Paper className={classes.paper}>
                            <Grid container direction="row" alignItems="center">
                                <Grid container item xs={2}>
                                    <Avatar alt="Remy Sharp" src={JLogoPicture} className={classes.avatar}/>
                                </Grid>
                                <Grid item style={{}} xs={10}>
                                    <Typography variant="h6" style={{fontWeight: "bold"}} gutterBottom>Web Search Engine</Typography>
                                    <Typography variant="body2" >A Website made with React.js which performs likea Search Engine : Finding and DisplayingDocuments with the closest relation to the Queryinputted by the user. User can upload one or multiple documents atonce, which will then be stemmed and stored in afirebase database. Then, every time the userinsert a query, the web will calculate the cosinesimiliarity using vectors to determine the results</Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={2}></Grid>
                </Grid>
                <Divider style={{marginTop: "1.5%", marginLeft: "30%", marginRight: "30%", marginBottom: "1.5%"}}/>
                <Grid container className={classes.flexRowAvatar}>
                    <Grid item xs={2}></Grid>
                    <Grid item container xs={8} className={classes.flexRowAvatar}>
                        <Paper className={classes.paper}>
                            <Grid container direction="row" alignItems="center">
                                <Grid item xs={2}>
                                    <Avatar alt="Remy Sharp" src={GamePicture} className={classes.avatar}/>
                                </Grid>
                                <Grid item style={{}} xs={10}>
                                    <Typography variant="h6" style={{fontWeight: "bold"}} gutterBottom>Web-Movies-and-Games-Catalog</Typography>
                                    <Typography variant="body2">A Website made with React.js which displays listsof favorite games and movies, each with its owndescriptions/details. User can add and delete games or movies, andgive additional details in realtime with other usersafter logging in to the website (must registerfirst). Uses live API and Database.</Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={2}></Grid>
                </Grid>
                <Divider style={{marginTop: "1.5%", marginLeft: "30%", marginRight: "30%", marginBottom: "1.5%"}}/>
                <Grid container className={classes.flexRowAvatar}>
                    <Grid item xs={2}></Grid>
                    <Grid item container xs={8} className={classes.flexRowAvatar}>
                        <Paper className={classes.paper}>
                            <Grid container direction="row" alignItems="center">
                                <Grid item xs={2}>
                                    <Avatar alt="Remy Sharp" src={ArkavidiaPicture} className={classes.avatar}/>
                                </Grid>
                                <Grid item style={{}} xs={10}>
                                    <Typography variant="h6" style={{fontWeight: "bold"}} gutterBottom>Arkavidia 7.0</Typography>
                                    <Typography variant="body2">Arkavidia 7.0 is an annual prestigious event organized by Institut Teknologi Bandung's Informatics Student Association (HMIF ITB). Themed "Establishing Digital Independence," Arkavidia is here to provide awareness for every individual of their rights and obligations in the digital world, so that they can realize digital independence for themselves.</Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={2}></Grid>
                </Grid>
            </>
        :  (topic === 2) ? 
            <>
            <Grid container className={classes.flexRowAvatar}>
                <Grid item xs={2}></Grid>
                    <Grid item container xs={8} className={classes.flexRowAvatar}>
                        <Paper className={classes.paper}>
                            <Grid container direction="row" alignItems="center">
                                <Grid item xs={2}>
                                    <Avatar alt="Remy Sharp" src={ReactPicture} className={classes.avatar}/>
                                </Grid>
                                <Grid item style={{}} xs={10}>
                                    <Typography variant="h6" style={{fontWeight: "bold"}} gutterBottom>Indonesia-COVID19-Cases-TrackerApp</Typography>
                                    <Typography variant="body2">A Mobile App made with React Native that keeps track of COVID-19 Cases in Indonesia per Provincethrough a live API (Postman, REST API).
Includes a login page, and detail pages whichdisplay the details of each province.</Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={2}></Grid>
                </Grid>
                <Divider style={{marginTop: "1.5%", marginLeft: "30%", marginRight: "30%", marginBottom: "1.5%"}}/>
                <Grid container className={classes.flexRowAvatar}>
                <Grid item xs={2}></Grid>
                    <Grid item container xs={8} className={classes.flexRowAvatar}>
                        <Paper className={classes.paper}>
                            <Grid container direction="row" alignItems="center">
                                <Grid item xs={2}>
                                    <Avatar alt="Remy Sharp" src={ReactPicture} className={classes.avatar}/>
                                </Grid>
                                <Grid item style={{}} xs={10}>
                                    <Typography variant="h6" style={{fontWeight: "bold"}} gutterBottom>Homey Homecooking Delivery App</Typography>
                                    <Typography variant="body2">A Mobile App made with React Native and Django Framework that serves as a meeting point between clients and homecooking merchants. (Currently in progress)</Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={2}></Grid>
                </Grid>
                </>
            : 
            <>
            <Grid container className={classes.flexRowAvatar}>
                <Grid item xs={2}></Grid>
                    <Grid item container xs={8} className={classes.flexRowAvatar}>
                        <Paper className={classes.paper}>
                            <Grid container direction="row" alignItems="center">
                                <Grid item xs={2}>
                                    <Avatar alt="Remy Sharp" src={PythonPicture} className={classes.avatar}/>
                                </Grid>
                                <Grid item style={{}} xs={10}>
                                    <Typography variant="h6" style={{fontWeight: "bold"}} gutterBottom>COVID-19 Cases Detection Using CNN Image Classification</Typography>
                                    <Typography variant="body2">A Research Project based on Deep Learning and
Image Classification to provide an alternative to
swab test for COVID19 testing.
The Project uses multiple model such as ResNet50
to Classify whether a patient is COVID Positive
based on the patient's Thorax X-Ray Sample.</Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={2}></Grid>
                </Grid>
                
                </>
            }
      </div>
    );
  }
  
  export default Projects;