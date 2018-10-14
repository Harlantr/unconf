import React from 'react';
import { connect } from 'react-redux';
import { eventsSelector } from '../../../../selectors/events';
import { modalOpenSelector, eventSelector } from '../../../../selectors/eventModal';
import EventPreview from '../../../components/eventPreview';
import EventModal from '../../../components/eventModal';

import '../index.css';

export const Component = ({
  events,
  modalOpen,
  selectedEvent
}) => (
  <div>
    <div className="events-wrap">
      {
        events.map(event => <EventPreview event={event} key={event._id} />)
      }
    </div>
    {modalOpen && <EventModal event={selectedEvent} />}
  </div>
);

const mapStateToProps = state => ({
  events: eventsSelector(state),
  modalOpen: modalOpenSelector(state),
  selectedEvent: eventSelector(state)
});

export default connect(mapStateToProps, {})(Component);
