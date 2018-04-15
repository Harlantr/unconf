import React from 'react';

const Error = ({ error }) => (
  <div className="jumbotron">
    <div className="container">
      <h3>There was an error loading event data</h3>
      <p className="lead">Please reload the page and try again</p>
    </div>
  </div>
);

export default Error;
