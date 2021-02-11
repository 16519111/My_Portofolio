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

function Experience() {
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <Typography variant="h4" align="center" style={{marginTop: "2%"}}>Websites</Typography>
      </div>
    );
  }
  
  export default Experience;