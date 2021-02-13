import React from 'react';
import ProfilePicture from "../../images/DimasProfile.jpg";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Avatar, Button, Typography, Paper, Hidden, Divider } from "@material-ui/core";
import Carousel from 'react-material-ui-carousel'
import PropTypes from 'prop-types';
import clsx from 'clsx';
import ISOPicture from "../../images/ISO.png";
import JazzPicture from "../../images/Jazz.png";
import CaturPicture from "../../images/Catur.png";
import WavePicture from "../../images/WaveProfile.svg";
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import SettingsIcon from '@material-ui/icons/Settings';
import StepConnector from '@material-ui/core/StepConnector';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PublishIcon from '@material-ui/icons/Publish';
import SearchIcon from '@material-ui/icons/Search';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import TableChartIcon from '@material-ui/icons/TableChart';

const ColorlibConnector = withStyles({
    alternativeLabel: {
      top: 22,
    },
    active: {
      '& $line': {
        backgroundImage:
          'linear-gradient( 95deg,rgb(44, 62, 80) 0%,rgb(24, 188, 156) 50%,rgb(52, 152, 219) 100%)',
      },
    },
    completed: {
      '& $line': {
        backgroundImage:
          'linear-gradient( 95deg,rgb(44, 62, 80) 0%,rgb(24, 188, 156) 50%,rgb(52, 152, 219) 100%)',
      },
    },
    line: {
      height: 3,
      border: 0,
      backgroundColor: '#eaeaf0',
      borderRadius: 1,
    },
})(StepConnector);
  
const useColorlibStepIconStyles = makeStyles({
    root: {
      backgroundColor: '#ccc',
      zIndex: 1,
      color: '#fff',
      width: 50,
      height: 50,
      display: 'flex',
      borderRadius: '50%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    active: {
      backgroundImage:
        'linear-gradient( 136deg, rgb(44, 62, 80) 0%, rgb(24, 188, 156) 50%, rgb(52, 152, 219) 100%)',
      boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    },
    completed: {
      backgroundImage:
        'linear-gradient( 136deg, rgb(44, 62, 80) 0%, rgb(24, 188, 156) 50%, rgb(52, 152, 219) 100%)',
    },
});
  
function ColorlibStepIcon(props) {
    const classes = useColorlibStepIconStyles();
    const { active, completed } = props;
  
    const icons = {
      1: <SettingsIcon />,
      2: <PublishIcon />,
      3: <SearchIcon />,
      4: <TableChartIcon/>,
      5: <ExpandMoreIcon />,
      6: <FindInPageIcon />,
      7: <SearchIcon />
    };
  
    return (
      <div
        className={clsx(classes.root, {
          [classes.active]: active,
          [classes.completed]: completed,
        })}
      >
        {icons[String(props.icon)]}
      </div>
    );
}
  
ColorlibStepIcon.propTypes = {
    active: PropTypes.bool,
    completed: PropTypes.bool,
    icon: PropTypes.node,
};
  
const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    button: {
      marginRight: theme.spacing(1),
      marginBottom: "2rem"
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(3),
    },
    link: {
      "&:focus, &:hover": {
          textDecoration: "none",
          color: "white"
      },
      color: "white" 
    },
    rootProfile: {
        
    },
    avatar: {
        width: "200px",
        height: "200px",
        marginBottom: "1.5%"
    },
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch"
    },
    flexCenter: {
        display: "flex",
        justifyContent: "center"
    },
    flexColumnCenter: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    marginTop: {
        marginTop: "4%"
    }, 
    isoBackground: {
      backgroundImage: `url(${ISOPicture})`,
      objectFit: "cover",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      marginLeft: "12%",
      marginRight: "12%",
      height: "320px",
      display: "flex",
      alignItems: "flex-end",
      padding: "20px",
      borderRadius: "15px"
    },
    jazzBackground: {
      backgroundImage: `url(${JazzPicture})`,
      objectFit: "cover",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      marginLeft: "12%",
      marginRight: "12%",
      height: "320px",
      display: "flex",
      alignItems: "flex-end",
      padding: "20px",
      borderRadius: "15px"
    },
    caturBackground: {
      backgroundImage: `url(${CaturPicture})`,
      objectFit: "cover",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      marginLeft: "12%",
      marginRight: "12%",
      height: "320px",
      display: "flex",
      alignItems: "flex-end",
      padding: "20px",
      borderRadius: "15px"
    },
    orgName: {
      color: "white",
      fontWeight: "bold",
    }
}));
  
function getSteps() {
    return ['Elementary','Junior High', 'Senior High', 'University'];
}
  
function getStepContent(step) {
    switch (step) {
      case 0: 
        return (
            <div>
                <Typography variant="h5" align="center" style={{marginTop: "2%", marginBottom: "1%"}}>Elementary School</Typography>
                <Typography align="center" gutterBottom><b>Sang Timur Tomang</b></Typography>
                <Typography align="center" color="textSecondary" variant="body2">National Exam : 94.5 / 100</Typography>
            </div>
        )
      case 1:
        return (
            <div>
                <Typography variant="h5" align="center" style={{marginTop: "2%", marginBottom: "1%"}}>Junior High School</Typography>
                <Typography align="center" gutterBottom><b>Canisius College</b></Typography>
                <Typography align="center" color="textSecondary" variant="body2">National Exam : 96.75 / 100</Typography>
            </div>
        )
      case 2:
        return (
            <div>
                <Typography variant="h5" align="center" style={{marginTop: "2%", marginBottom: "1%"}}>Senior High School</Typography>
                <Typography align="center"><b>Canisius College</b></Typography>
                <Typography align="center" gutterBottom color="textPrimary">Science Program</Typography>
                <Typography align="center" color="textSecondary" variant="body2">National Exam : 97.5 / 100</Typography>
            </div>
        )
      case 3:
        return (
            <div>
                <Typography variant="h5" align="center" style={{marginTop: "2%", marginBottom: "1%"}}>University</Typography>
                <Typography align="center"><b>Institut Teknologi Bandung</b></Typography>
                <Typography align="center" gutterBottom color="textPrimary">Informatics / Computer Science Bachelor</Typography>
                <Typography align="center" color="textSecondary" variant="body2">Current GPA : 3.85/4</Typography>
            </div>
        )
      default:
        return 'Unknown step';
    }
}

function Item(props){
    console.log(props)
    let result = []
    const classes = useStyles();
    if(props.item.name === "ISO") {
      result = (
          <Paper className={classes.isoBackground}>
              <Typography variant="h5" className={classes.orgName}>ITB Student Orchestra</Typography>
          </Paper>
      )
    } else if(props.item.name === "Jazz") {
      result = (
        <Paper className={classes.jazzBackground}>
            <Typography variant="h5" className={classes.orgName}>ITB Jazz</Typography>
        </Paper>
      )
    } else {
      result = (
        <Paper className={classes.caturBackground}>
            <Typography variant="h5" className={classes.orgName}>Percama ITB</Typography>
        </Paper>
      )
    }
    return result
}

function Profile() {
    const classes = useStyles();

    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const items = [
        {
            name: "ISO",
        },
        {
            name: "Jazz",
        },
        {
            name: "Catur"
        }
    ]

    return (
        <div className={classes.rootProfile}>
            <div className={classes.flexColumnCenter}>
                <Avatar alt="Remy Sharp" src={ProfilePicture} className={classes.avatar}/>
                <Typography variant="h6">Gregorius Dimas Baskara</Typography>
                <Typography>Web Developer</Typography>
            </div>
            <Divider style={{marginTop: "4%", marginLeft: "10%", marginRight: "10%"}}/>
            <div className={classes.flexColumnCenter}>
                <Typography variant="h4" className={classes.marginTop}>About Me</Typography>
                <Typography align="center" style={{marginLeft: "20%", marginRight: "20%", marginTop: "2%"}}>Hello, My Name is Gregorius Dimas Baskara. I'm a passionate Informatics student that has basic skills in Programming Languages, Web and Apps Development, Data Science, and Machine Learning. I really love to make Websites and Mobile Apps by implementing great designs and reliable databases. </Typography>
            </div>
            <Divider style={{marginTop: "4%", marginLeft: "10%", marginRight: "10%"}}/>
            <Hidden smDown>
                <Typography variant="h4" style={{marginTop: "5%", textAlign: "center", marginBottom: "2%"}}>EDUCATION</Typography>
            </Hidden>
            <Hidden mdUp>
                <Typography variant="h4" style={{marginTop: "5%", textAlign: "center", marginBottom: "2%"}}>EDUCATION</Typography>
            </Hidden>
            <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />} className={classes.flexCenter}>
                {steps.map((label) => (
                <Step key={label}>
                    <StepLabel StepIconComponent={ColorlibStepIcon}><Hidden smDown>{label}</Hidden></StepLabel>
                </Step>
                ))}
            </Stepper>
            <div className={classes.container}>  
                <div>
                    {activeStep === steps.length ? (
                    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <div>
                            <Button onClick={handleReset} className={classes.button}>
                            Back to Elementary
                            </Button>
                        </div>
                    </div>
                    ) : (
                    <div style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
                        <div className={classes.instructions}>{getStepContent(activeStep)}</div>
                        <div>
                        <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                            Back
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleNext}
                            className={classes.button}
                        >
                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                        </div>
                    </div>
                    )}
                </div>
            </div>
            <Divider style={{marginTop: "4%", marginLeft: "10%", marginRight: "10%"}}/>
            <Typography variant="h4" style={{marginTop: "5%", textAlign: "center", marginBottom: "2%"}}>ORGANIZATION</Typography>
            <div style={{marginLeft: "20%", marginRight: "20%"}}>
              <Carousel navButtonsAlwaysVisible>
                  {items.map( (item, i) => <Item key={i} item={item} /> )}
              </Carousel>
            </div>
        </div>
    )
}

export default Profile