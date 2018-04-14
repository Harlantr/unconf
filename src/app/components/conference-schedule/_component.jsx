import React from 'react';
import { connect } from 'react-redux';
import {
  eventsSelector
} from '../../../selectors/events';
import Event from '../../components/event';

const Component = ({
  events
}) => (
  <div>
    {
      events.map(event => <Event event={event} key={event._id} />)
    }
  </div>
);

const mapStateToProps = state => ({
  events: eventsSelector(state)
});

export default connect(mapStateToProps, {})(Component);
