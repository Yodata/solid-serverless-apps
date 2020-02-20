// @ts-nocheck
import React from 'react';
import classNames from 'classnames';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Collapse from '@material-ui/core/Collapse'
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import IconButton from '@material-ui/core/IconButton'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Switch from '@material-ui/core/Switch'
import CardActions from '@material-ui/core/CardActions'
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Grow from '@material-ui/core/Grow'



const styles = theme => ({
  cardMedia: {
    paddingTop: '56.25%',
    backgroundSize: '56.25%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  },
  cardContent: {
    height: '155px'
  },
  actions: {
    display: 'flex'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
})


class AppCard extends React.Component {
  state = { expanded: false, enabled: false };

  handleSwitchToggle = () => {
    this.setState(state => ({ enabled: !state.enabled }));
  }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes, application } = this.props
    return (
      <Grow in={true}>
        <Card>
          <CardMedia
            className={classes.cardMedia}
            image={application.logo.url}
            title={application.name}
          />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {application.name}
            </Typography>
            <Typography>
              {application.description}
            </Typography>
          </CardContent>
          <CardActions className={classes.actions}>
            <Switch checked={this.state.enabled} onClick={this.handleSwitchToggle} />
            <Typography>{this.state.enabled && 'CONNECTED'}</Typography>
            <IconButton
              className={classNames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show permissions"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography variant='caption' >REQUESTS ACCESS TO:</Typography>
              <List dense>
                {application.permissions.map(permission => (
                  <ListItem key={permission.id} dense className={classes.ListItem}>
                    <FormControlLabel
                      control={<Checkbox
                        className={classes.checkbox}
                        checked={permission.checked}
                        tabIndex={-1}
                        disableRipple
                      />}
                      label={permission.description}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Collapse>
        </Card >
      </Grow>
    )
  }
}

export default withStyles(styles)(AppCard)
