// @ts-nocheck
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  heroUnit: {
    backgroundColor: '#552448',
    color: 'white',
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
});

function Hero(props) {
  const { classes, title, content } = props
  return (
    <div className={classes.heroUnit}>
      <div className={classes.heroContent}>
        <Typography component="h1" variant="h3" align="center" color="inherit" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h6" align="center" color="inherit" paragraph>
          {content}
        </Typography>
      </div>
    </div>
  )
}

export default withStyles(styles)(Hero)