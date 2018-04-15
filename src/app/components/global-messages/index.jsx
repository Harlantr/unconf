import React from 'react';
import { connect } from 'react-redux';

import { messagesSelector } from '../../../selectors/globalMessages';
import GlobalMessage from '../global-message';

import './index.css';

const GlobalMessages = ({ messages }) => (
  <div className="global-message-container">
    {
      messages.map(msg => <GlobalMessage msg={msg} key={msg.id} />)
    }
  </div>
);

const mapStateToProps = state => ({
  messages: messagesSelector(state)
});

export default connect(mapStateToProps, {})(GlobalMessages);
