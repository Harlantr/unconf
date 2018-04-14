import React from 'react';

import './index.css';

const Event = ({
  event
}) => (
  <div>
    <h1>{event.title}</h1>
    <h4>by: {event.creator}</h4>
    <h4>type: {event.type}</h4>
    <h4>difficulty: {event.difficulty}</h4>
    <h4>tags: {event.tags.map(tag => <span key={tag} className="event-tag">{tag}</span>)}</h4>
    <p>{event.description}</p>
  </div>
);

export default Event;
