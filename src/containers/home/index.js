import React from 'react';
import PropTypes, { object } from 'prop-types';
import { connect } from 'react-redux';

// UI
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

// Redux
import { getEvents } from '../../actions/events';
import { eventsSelector } from '../../selectors/events';

const EventsList = ({
  events,
  getEvents
}) => (
  <div>
    <h1>Events</h1>
    <button onClick={getEvents}>
      Get Events
    </button>
    <div>
      {
        events &&
            events.map(event => (
              <Card>
                <CardContent>
                  <Typography variant="headline" component="h2">
                    {event.title}
                  </Typography>
                  <Typography variant="subheading" component="h3">
                    by {event.creator}
                  </Typography>
                  <Typography component="p">
                    {event.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                  Share
                  </Button>
                  <Button size="small" color="primary">
                  Learn More
                  </Button>
                </CardActions>
              </Card>
            ))
        }
    </div>
  </div>
);

EventsList.propTypes = {
  events: PropTypes.arrayOf(object),
  getEvents: PropTypes.func.isRequired
};

EventsList.defaultProps = {
  events: null
};

const mapStateToProps = state => ({
  events: eventsSelector(state)
});

const mapDispatchToProps = {
  getEvents
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EventsList);
