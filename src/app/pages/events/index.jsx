import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getEvents } from '../../../actions/events';
import { getConfData } from '../../../actions/conf';
import ConferenceSchedule from '../../components/conference-schedule';

class EventsPage extends Component {
  componentDidMount() {
    // Grab conference data on mount of this page.
    this.props.getConfData();
    this.props.getEvents();
  }

  render() {
    return (
      <div>
        <h1>Events</h1>
        <ConferenceSchedule />
      </div>
    );
  }
}

const mapDispatchToProps = {
  getConfData,
  getEvents
};

export default connect(
  null,
  mapDispatchToProps,
)(EventsPage);
