import React from 'react';
import { connect } from 'react-redux';

import { destroyMesssage } from '../../../actions/globalMessage';
import './index.css';

class GlobalMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeout: setInterval(() => {
        this.props.destroyMesssage(this.props.msg.id);
      }, 5000)
    };
  }

  componentWillUnmount() {
    window.clearTimeout(this.state.timeout);
  }

  render() {
    const { msg, destroyMesssage } = this.props;
    return (
      <div className={`alert alert-${msg.type} global-message`} role="alert">
        <div className="row">
          <div className="col-md-11">
            <span>{msg.text}</span>
          </div>
          <div className="col-md-1">
            <button className="btn close-msg-btn" onClick={() => destroyMesssage(msg.id)}>X</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  destroyMesssage
};

export default connect(null, mapDispatchToProps)(GlobalMessage);
