import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import CalendarToday from '@material-ui/icons/CalendarToday';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Snackbar from '@material-ui/core/Snackbar';

import gapi from 'gapi-client';

const styles = theme => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },

  input: {
    margin: theme.spacing.unit,
    marginTop: '10px',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  textField: {
    width: '60vw',
    maxWidth: '500px',
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
  },
  icon: {
    fontSize: 20,
  },
});

class MeetingScheduler extends Component {
  componentDidMount() {
    gapi.load('client:auth2', () => {
      gapi.auth2.init({
        client_id:
          '90482360144-unjb8jaj1i47r5lvc0h5vph4sfnvm4t2.apps.googleusercontent.com',
      });
    });
  }

  state = {
    auth: true,
    anchorEl: null,
    title: '',
    purpose: '',
    date: '',
    time: '09:00',
    showAlert: false,
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
    window.location = '/project/<id>';
  };

  handleSubmit = () => {
    console.log('button works');
  };

  authenticate = () => {
    let self = this;
    return gapi.auth2
      .getAuthInstance()
      .signIn({
        scope:
          'https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.events',
      })
      .then(
        function() {
          console.log('Sign-in successful');
          self.execute();
        },
        function(err) {
          console.error('Error signing in', err);
        },
      )
      .then(this.loadClient());
  };
  loadClient = () => {
    return gapi.client
      .load('https://content.googleapis.com/discovery/v1/apis/calendar/v3/rest')
      .then(
        function() {
          console.log('GAPI client loaded for API');
        },
        function(err) {
          console.error('Error loading GAPI client for API', err);
        },
      );
  };
  // Make sure the client is loaded and sign-in is complete before calling this method.
  execute = () => {
    return gapi.client.calendar.events
      .insert({
        calendarId: 'primary',
        conferenceDataVersion: 1,
        sendNotifications: true,
        sendUpdates: 'all',
        supportsAttachments: false,
        start: {
          dateTime: `${this.state.date}T${this.state.time}:00+05:30`,
          timeZone: 'Asia/Kolkata',
        },
        attendees: [
          { email: 'anshu.av97@gmail.com' },
          { email: '201651062@iiitvadodara.ac.in' },
        ],
        end: {
          dateTime: `${this.state.date}T${this.state.time}:00+05:30`,
          timeZone: 'Asia/Kolkata',
        },
        description: `${this.state.purpose}`,
        summary: `${this.state.title},`,
      })
      .then(
        function(response) {
          // Handle the results here (response.result has the parsed body).
          console.log('Response', response);
        },
        function(err) {
          console.error('Execute error', err);
        },
      );
  };

  handleMeetingSchedule = input => event => {
    if (event.target.id === 'meeting-title')
      this.setState({ [input]: event.target.value });
    else if (event.target.id === 'meeting-purpose')
      this.setState({ [input]: event.target.value });
    else if (event.target.id === 'meeting-date') {
      this.setState({ [input]: event.target.value });
    } else this.setState({ [input]: event.target.value });
  };

  validateForm = event => {
    event.preventDefault();
    if (
      this.state.title === '' ||
      this.state.purpose === '' ||
      this.state.date === ''
    ) {
      console.log('empty');
      this.setState({ showAlert: true });
      return 0;
    }
    console.log(this.state.date);
    this.authenticate();
  };

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.container}>
        <form action="" className={classes.form} onSubmit={this.validateForm}>
          <Typography variant="headline" component="h2">
            Schedule Meeting
          </Typography>
          <TextField
            id="meeting-title"
            label="Title"
            type="text"
            onChange={this.handleMeetingSchedule('title')}
            placeholder="Give a suitable title"
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="meeting-purpose"
            label="Purpose"
            type="text"
            onChange={this.handleMeetingSchedule('purpose')}
            placeholder="Purpose for scheduling"
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="meeting-date"
            label="Meeting Date"
            type="date"
            defaultValue="1999-12-31"
            onChange={this.handleMeetingSchedule('date')}
            className={classes.TextField}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="meeting-time"
            label="Meeting Time"
            type="time"
            defaultValue="09:00"
            onChange={this.handleMeetingSchedule('time')}
            className={classes.TextField}
            margin="normal"
            variant="outlined"
          />
          <div>
            <Button
              variant="fab"
              type="submit"
              color="primary"
              aria-label="Add"
              className={classes.button}
            >
              <CalendarToday />
            </Button>
          </div>
        </form>
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={this.state.showAlert}
          onClose={() => this.setState({ showAlert: false })}
          message={<span>Add the necessary fields</span>}
        />
      </div>
    );
  }
}

MeetingScheduler.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MeetingScheduler);