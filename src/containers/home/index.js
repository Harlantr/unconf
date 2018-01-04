import React from 'react';
import PropTypes from 'prop-types';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
} from '../../actions/counter';

const Home = ({
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  count,
  changePage,
  isIncrementing,
  isDecrementing,
}) => (
  <div>
    <h1>Home</h1>
    <p>Count: {count}</p>
    <div>
      <button onClick={() => increment(count)} disabled={isIncrementing}>
        Increment
      </button>
      <button onClick={() => incrementAsync(count)} disabled={isIncrementing}>
        Increment Async
      </button>
    </div>
    <div>
      <button onClick={() => decrement(count)} disabled={isDecrementing}>
        Decrement
      </button>
      <button onClick={() => decrementAsync(count)} disabled={isDecrementing}>
        Decrement Async
      </button>
    </div>
    <div>
      <button onClick={() => changePage()}>Go to about page via redux</button>
    </div>
  </div>
);

Home.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  isIncrementing: PropTypes.bool.isRequired,
  decrement: PropTypes.func.isRequired,
  decrementAsync: PropTypes.func.isRequired,
  isDecrementing: PropTypes.bool.isRequired,
  changePage: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  changePage: () => push('/about-us'),
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
