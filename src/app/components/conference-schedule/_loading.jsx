import React from 'react';
import Spinner from '../spinner';

const Loading = () => (
  <div className="jumbotron">
    <div className="container">
      <Spinner />
      <h3>Loading...</h3>
    </div>
  </div>
);

export default Loading;
