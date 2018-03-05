import React, { Component } from 'react';
import PropTypes, { object } from 'prop-types';
import { connect } from 'react-redux';
import { getEvents } from '../../../actions/events';
import {
  eventsSelector,
  eventsErrorSelector
} from '../../../selectors/events';
import { getConfData } from '../../../actions/conf';
import Event from '../../components/event';

class EventsPage extends Component {
  componentWillMount() {
    this.props.getConfData();
  }

  render() {
    const {
      events,
      eventsError,
      getEvents
    } = this.props;
    return (
      <div>
        <h1>Events</h1>
        <button onClick={getEvents}>
          Get Events
        </button>
        {
          eventsError
            ? <h3>Error: {eventsError}</h3>
            : events.map(event => <Event key={event._id} event={event} />)
        }
      </div>
    );
  }
}

EventsPage.propTypes = {
  events: PropTypes.arrayOf(object).isRequired,
  eventsError: PropTypes.string,
  getEvents: PropTypes.func.isRequired,
  getConfData: PropTypes.func.isRequired
};

EventsPage.defaultProps = {
  eventsError: null
};

const mapStateToProps = state => ({
  events: eventsSelector(state),
  eventsError: eventsErrorSelector(state)
});

const mapDispatchToProps = {
  getEvents,
  getConfData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EventsPage);
