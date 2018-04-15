import React from 'react';
import { connect } from 'react-redux';
import { openEventModal } from '../../../actions/eventModal';
import './index.css';

const EventPreview = ({
  event,
  openEventModal
}) => (
  <div className="event-preview">
    <h5>{event.title}</h5>
    <hr />
    <p>by: {event.creator}</p>
    {event.tags.map(tag => <span key={tag} className="badge badge-pill badge-secondary event-tag">{tag}</span>)}
    <button onClick={() => openEventModal(event)} className="btn btn-primary view-details-btn">View Details</button>
  </div>
);

const mapDispatchToProps = {
  openEventModal
};

export default connect(null, mapDispatchToProps)(EventPreview);
