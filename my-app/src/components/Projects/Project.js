import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Accordion, AccordionDetails, AccordionSummary, Typography, Divider } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
  }));

function Projects() {
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <Typography variant="h4" align="center" style={{marginTop: "2%"}}>Websites</Typography>
        <Divider style={{marginTop: "2%", marginLeft: "10%", marginRight: "10%", marginBottom: "2%"}}/>
        <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography className={classes.heading}>StudentxCEOs 10th Grand Summit</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                sit amet blandit leo lobortis eget.
            </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography className={classes.heading}>Web Search Engine</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                sit amet blandit leo lobortis eget.
            </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography className={classes.heading}>Movies and Games Catalog</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                sit amet blandit leo lobortis eget.
            </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography className={classes.heading}>Arkavidia 7.0</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                sit amet blandit leo lobortis eget.
            </Typography>
            </AccordionDetails>
        </Accordion>
        <Typography variant="h4" align="center" style={{marginTop: "6%"}}>Mobile Apps</Typography>
        <Divider style={{marginTop: "2%", marginLeft: "10%", marginRight: "10%", marginBottom: "2%"}}/>
        <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography className={classes.heading}>Indonesia COVID19 Cases TrackerApp</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                sit amet blandit leo lobortis eget.
            </Typography>
            </AccordionDetails>
        </Accordion>
        <Typography variant="h4" align="center" style={{marginTop: "6%"}}>Data Science</Typography>
        <Divider style={{marginTop: "2%", marginLeft: "10%", marginRight: "10%", marginBottom: "2%"}}/>
        <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography className={classes.heading}>COVID-19 Cases Detection Using Convolutional
Neural Network Image Classification (Deep
Learning) on X-Ray (Thorax) Samples</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                sit amet blandit leo lobortis eget.
            </Typography>
            </AccordionDetails>
        </Accordion>
      </div>
    );
  }
  
  export default Projects;