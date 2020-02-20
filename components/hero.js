// @ts-nocheck
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  heroUnit: {
    backgroundColor: '#552448',
    color: 'white',
    // backgroundImage: 'url(/static/img/reece_nichols_bkg.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain'
  },
  heroContent: {
    // maxWidth: 760,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  title: {
    fontWeight: '400',
    // fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Helvetica Neue", Arial, sans-serif,"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    fontVariantCaps: 'all-petite-caps',
    width: '100%'
  }
});

function Hero(props) {
  const { classes, title, content } = props
  return (
    <div className={classes.heroUnit}>
      <div className={classes.heroContent}>
        <Typography className={classes.title} component="h1" variant="h2" align="center" color="inherit" gutterBottom>
          {title}
        </Typography>
        <Typography align="center" color="inherit" paragraph variant="h5">
          {content}
        </Typography>
      </div>
    </div>
  )
}

export default withStyles(styles)(Hero)