import React from 'react';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import { closeEventModal, updateEventViaModal } from '../../../actions/eventModal';
import { eventSelector } from '../../../selectors/eventModal';
import EventForm from '../eventForm';

import './index.css';

class EventModal extends React.Component {
  constructor(props) {
    super(props);
    this.captureEsc = this.captureEsc.bind(this);
    this.submit = this.submit.bind(this);
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

  submit(e) {
    e.preventDefault();

    // Update event with values taken directly from the form
    this.props.updateEventViaModal(this.props.formValues);
  }

  render() {
    const { closeEventModal, event } = this.props;
    return (
      <div className="event-modal-wrap">
        <div className="event-modal-content container">
          <EventForm onSubmit={this.submit} initialValues={event} />
          <div className="save-cancel-buttons">
            <button className="btn btn-danger" title="Close Window" onClick={() => closeEventModal()}>Cancel</button>
            <button type="button" className="btn btn-primary save-btn" onClick={this.submit}>Save</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  event: eventSelector(state),
  formValues: formValueSelector('event')(
    state,
    ...Object.keys(eventSelector(state))
  )
});

const mapDispatchToProps = {
  closeEventModal,
  updateEventViaModal
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventModal);
