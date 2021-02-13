import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { AppBar, Tabs, Tab, Box, Typography, Divider, Step, Stepper, StepLabel, Button } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    marginLeft: "10%",
    marginRight: "10%",
    textAlign: "center"
  },
}));

function getSteps(page) {
  if (page === 1) {
    return ['About the Company', 'Tutoring and Training', 'First Task', 'First Feature', 'Second Feature', 'Third Feature', 'Fourth Feature'];
  } else if (page === 2) {
    return ['About the Event', 'First Meeting', 'First Task : Main Landing Page', 'IT Fest Page'];
  } else {
    return ['About the Event', 'First Meeting', 'Landing Page', 'Preevent Page', 'Details & Context'];
  }
}

function getStepContent(stepIndex, page) {
  if (page === 1) {
    switch (stepIndex) {
      case 0:
        return 'Schooly System is a Startup that provides Learning Management System (LMS) Services to Schools in Indonesia. It aims to help teachers and students to communicate and learn better. I took part in developing the system as a full stack Web Developer Intern';
      case 1:
        return 'I recieved tutorial about React.js (including React Redux), Mongo No SQL Database, Dropbox, Express, Node.js, and Material UI';
      case 2:
        return 'I was tasked to make a little App with React.js to import and export data from a .csv file extension';
      case 3:
        return 'Next, my mentors tasked me to make a Profile Page and View Profile Page so that Students and Teachers can see each other\'s data';
      case 4:
        return 'After which, I was tasked to make Report Page which displays all the marks/scores from every task, quiz, and exams each student had undergo';
      case 5:
        return 'As a third feature, I was tasked to make a Page where teachers can give or change a student\'s mark on a particular task/quiz/exam';
      case 6:
        return 'For the final feature, I was tasked to make a functionality to export a particular student\'s report. At the same time, I also need to implement a storage backup for the system which uses Dropbox and Google Drive API';
      default:
        return 'Unknown stepIndex';
    }
  } else if (page === 2) {
    switch (stepIndex) {
      case 0:
        return 'Arkavidia 7.0 is an annual prestigious event organized by Institut Teknologi Bandung\'s Informatics Student Association (HMIF ITB). Themed "Establishing Digital Independence," Arkavidia is here to provide awareness for every individual of their rights and obligations in the digital world, so that they can realize digital independence for themselves. I took part in the event as an IT Staff which made all the Websites and Online Games';
      case 1:
        return 'In the first meeting, we discussed about what framework/library will be used on building the Website. It was later decided to use React.js with Next.js installed to make the frontend part of the Website and Django for the backend';
      case 2:
        return 'For the first batch of the task, I was tasked to develop the landing page according to the design given by the creative team. After which, I was also tasked to develop all 5 competition pages that will be held by the event';
      default:
        return 'For the second batch of the task, I was tasked to implement the company profile page for the IT Fest part of the event. I was also tasked to make the algorithm for user login and register and the home page.';
    }
  } else {
    switch (stepIndex) {
      case 0:
        return 'The biggest annual event held by StudentsxCEOs Bandung Chapter, a platform for students across Indonesia to collaborate and solve real prominent business cases, problems related to Sustainable Development Goals (SDGs), and the chance to learn and engage with renowned speakers from their respected fields through a series of grand talkshows. I took part in the event as a Web Developer Outsource';
      case 1:
        return 'In the first meeting, we discussed about which Library/Framework that will be used to develop the website. React.js and Next.js were chosen. We also discussed about the design and fee of the website';
      case 2:
        return 'I was tasked to implement the landing page which consists of a carousel, event cards, and the scrollable timeline';
      case 3:
        return 'Next, I also implement the preevent page which consists of a jumbotron and a responsive option box (dropdown in mobile view) which displays different contents for each option. I also implement the scrollable timeline in the near bottom of the page.';
      case 4:
        return 'Finally, I was also tasked to make a dual language mode for the Website which enables it to display both Indonesian and English version of the content. For that, I used one of the features of react, called React Context in order to make a global state';
      default:
        return 'Unknown stepIndex';
    }
  }
}

function Experience() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [activeStepOne, setActiveStepOne] = React.useState(0);
  const [activeStepTwo, setActiveStepTwo] = React.useState(0);
  const [activeStepThree, setActiveStepThree] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const handleNext = (page) => {
    if(page === 1){
      setActiveStepOne((prevActiveStep) => prevActiveStep + 1);
    } else if (page === 2) {
      setActiveStepTwo((prevActiveStep) => prevActiveStep + 1);
    } else {
      setActiveStepThree((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = (page) => {
    if(page === 1){
      setActiveStepOne((prevActiveStep) => prevActiveStep - 1);
    } else if (page === 2) {
      setActiveStepTwo((prevActiveStep) => prevActiveStep - 1);
    } else {
      setActiveStepThree((prevActiveStep) => prevActiveStep - 1);
    }
  };

  const handleReset = (page) => {
    if(page === 1){
      setActiveStepOne(0);
    } else if (page === 2) {
      setActiveStepTwo(0);
    } else {
      setActiveStepThree(0);
    }
  };

    return (
      <div className={classes.root}>
        <Typography variant="h4" align="center" style={{marginTop: "2%"}}>Experiences</Typography>
        <Divider style={{marginTop: "2%", marginLeft: "10%", marginRight: "10%", marginBottom: "2%"}}/>
        <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Schooly System" {...a11yProps(0)} />
          <Tab label="Arkavidia" {...a11yProps(1)} />
          <Tab label="StudentxCEOs" {...a11yProps(2)} />
        </Tabs>
      </AppBar>

        <TabPanel value={value} index={0} dir={theme.direction}>
          <Stepper activeStep={activeStepOne} alternativeLabel>
            {getSteps(1).map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <div style={{display: "flex", justifyContent: "center"}}>
            {activeStepOne === getSteps(1).length ? (
              <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <Typography className={classes.instructions}>That's all what I've done and learned from doing internship in Schooly System</Typography>
                <Button onClick={() => handleReset(1)}>Reset</Button>
              </div>
            ) : (
              <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <Typography className={classes.instructions}>{getStepContent(activeStepOne, 1)}</Typography>
                <div>
                  <Button
                    disabled={activeStepOne === 0}
                    onClick={() => handleBack(1)}
                    className={classes.backButton}
                  >
                    Back
                  </Button>
                  <Button variant="contained" color="primary" onClick={() => handleNext(1)}>
                    {activeStepOne === getSteps(1).length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <Stepper activeStep={activeStepTwo} alternativeLabel>
            {getSteps(2).map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <div style={{display: "flex", justifyContent: "center"}}> 
            {activeStepTwo === getSteps(2).length ? (
              <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <Typography className={classes.instructions}>That's all what I've done and learned from being part of the IT Team in Arkavidia 7.0</Typography>
                <Button onClick={() => handleReset(2)}>Reset</Button>
              </div>
            ) : (
              <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <Typography className={classes.instructions}>{getStepContent(activeStepTwo, 2)}</Typography>
                <div>
                  <Button
                    disabled={activeStepTwo === 0}
                    onClick={() => handleBack(2)}
                    className={classes.backButton}
                  >
                    Back
                  </Button>
                  <Button variant="contained" color="primary" onClick={() => handleNext(2)}>
                    {activeStepTwo === getSteps(2).length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
        <Stepper activeStep={activeStepThree} alternativeLabel>
            {getSteps(3).map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <div style={{display: "flex", justifyContent: "center"}}>
            {activeStepThree === getSteps(3).length ? (
              <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <Typography className={classes.instructions}>That's all what I've done and learned from outsourcing as a Web Developer in StudentxCEOs 10th Grand Summit</Typography>
                <Button onClick={() => handleReset(3)}>Reset</Button>
              </div>
            ) : (
              <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <Typography className={classes.instructions}>{getStepContent(activeStepThree, 3)}</Typography>
                <div style={{display: "flex", justifyContent: "center"}}>
                  <Button
                    disabled={activeStepThree === 0}
                    onClick={() => handleBack(3)}
                    className={classes.backButton}
                  >
                    Back
                  </Button>
                  <Button variant="contained" color="primary" onClick={() => handleNext(3)}>
                    {activeStepThree === getSteps(3).length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </TabPanel>
      </div>
    );
  }
  
  export default Experience;