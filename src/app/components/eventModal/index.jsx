import React from 'react';
import { connect } from 'react-redux';
import { eventSelector } from '../../../selectors/eventModal';
import { closeEventModal, updateEventViaModal } from '../../../actions/eventModal';

import './index.css';

class EventModal extends React.Component {
  constructor(props) {
    super(props);
    this.captureEsc = this.captureEsc.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.captureEsc, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.captureEsc, false);
  }

  captureEsc(event) {
    // Close the modal on [esc]
    if (event.keyCode === 27) {
      this.props.closeEventModal();
    }
  }

  render() {
    const { event, closeEventModal, updateEventViaModal } = this.props;
    return (
      <div className="event-modal-wrap">
        <div className="event-modal-content container">
          <div className="close-btn-wrap">
            <button className="btn btn-danger close-btn" title="Close Window" onClick={() => closeEventModal()}>X</button>
          </div>
          <h3>{event.title}</h3>
          <hr />
          <p>By: {event.creator}</p>
          <p>Type: {event.type}</p>
          <p>Difficulty: {event.difficulty}</p>
          <p>{event.tags.map(tag => <span key={tag} className="badge badge-pill badge-secondary event-tag">{tag}</span>)}</p>
          <p>{event.description}</p>
          <button type="button" className="btn btn-primary" onClick={() => updateEventViaModal(event)}>Save</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  event: eventSelector(state)
});

const mapDispatchToProps = {
  closeEventModal,
  updateEventViaModal
};

export default connect(mapStateToProps, mapDispatchToProps)(EventModal);
