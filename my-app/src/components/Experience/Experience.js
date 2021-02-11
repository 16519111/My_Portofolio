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
    marginBottom: theme.spacing(1),
  },
}));

function getSteps(page) {
  if (page === 1) {
    return ['Tutoring and Training', 'First Task', 'First Feature', 'Second Feature', 'Third Feature', 'Fourth Feature'];
  } else if (page === 2) {
    return ['First Meeting', 'First Task : Main Landing Page', 'IT Fest Page'];
  } else {
    return ['First Meeting', 'Landing Page', 'Preevent Page', 'Details & Context'];
  }
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return 'Select campaign settings...';
    case 1:
      return 'What is an ad group anyways?';
    case 2:
      return 'This is the bit I really care about!';
    default:
      return 'Unknown stepIndex';
  }
}

function Experience() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [activeStep, setActiveStep] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
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
          <Stepper activeStep={activeStep} alternativeLabel>
            {getSteps(1).map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <div style={{display: "flex", justifyContent: "center"}}>
            {activeStep === getSteps(1).length ? (
              <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <Typography className={classes.instructions}>All steps completed</Typography>
                <Button onClick={handleReset}>Reset</Button>
              </div>
            ) : (
              <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.backButton}
                  >
                    Back
                  </Button>
                  <Button variant="contained" color="primary" onClick={handleNext}>
                    {activeStep === getSteps(1).length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <Stepper activeStep={activeStep} alternativeLabel>
            {getSteps(2).map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <div style={{display: "flex", justifyContent: "center"}}> 
            {activeStep === getSteps(2).length ? (
              <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <Typography className={classes.instructions}>All steps completed</Typography>
                <Button onClick={handleReset}>Reset</Button>
              </div>
            ) : (
              <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.backButton}
                  >
                    Back
                  </Button>
                  <Button variant="contained" color="primary" onClick={handleNext}>
                    {activeStep === getSteps(2).length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
        <Stepper activeStep={activeStep} alternativeLabel>
            {getSteps(3).map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <div style={{display: "flex", justifyContent: "center"}}>
            {activeStep === getSteps(3).length ? (
              <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <Typography className={classes.instructions}>All steps completed</Typography>
                <Button onClick={handleReset}>Reset</Button>
              </div>
            ) : (
              <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                <div style={{display: "flex", justifyContent: "center"}}>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.backButton}
                  >
                    Back
                  </Button>
                  <Button variant="contained" color="primary" onClick={handleNext}>
                    {activeStep === getSteps(3).length - 1 ? 'Finish' : 'Next'}
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