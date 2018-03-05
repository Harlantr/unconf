import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getConfData } from '../../../actions/conf';
import {
  confDataLoadingSelector,
  confDataErrorSelector
} from '../../../selectors/conf';
import ConferenceSchedule from '../../components/conference-schedule';

class EventsPage extends Component {
  constructor(props) {
    super(props);

    // Get conference data on load
    props.getConfData();
  }

  render() {
    const {
      confDataLoading,
      confDataError
    } = this.props;
    return (
      <div>
        {
          confDataLoading
            ? <h1>Loading...</h1>
            : confDataError
              ? <h1>Error: {confDataError}</h1>
              : <ConferenceSchedule />
        }
      </div>
    );
  }
}

EventsPage.propTypes = {
  getConfData: PropTypes.func.isRequired,
  confDataLoading: PropTypes.bool.isRequired,
  confDataError: PropTypes.string
};

EventsPage.defaultProps = {
  confDataError: null
};

const mapStateToProps = state => ({
  confDataLoading: confDataLoadingSelector(state),
  confDataError: confDataErrorSelector(state)
});

const mapDispatchToProps = {
  getConfData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EventsPage);
