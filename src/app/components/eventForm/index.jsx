import React from 'react';
import { Field, reduxForm } from 'redux-form';
import typeOptions from '../../../constants/typeOptions';
import difficultyOptions from '../../../constants/difficultyOptions';

const EventForm = ({ initialValues }) => (
  <form>
    <div className="form-group row">
      <h5>All fields are required.</h5>
    </div>
    <div className="form-group row">
      <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
      <div className="col-sm-10">
        <Field
          name="title"
          component="input"
          type="text"
          className="form-control"
        />
      </div>
    </div>
    <div className="form-group row">
      <label htmlFor="creator" className="col-sm-2 col-form-label">Creator</label>
      <div className="col-sm-10">
        <Field
          name="creator"
          component="input"
          type="text"
          className="form-control"
        />
      </div>
    </div>
    <div className="form-group row">
      <label htmlFor="type" className="col-sm-2 col-form-label">Type</label>
      <div className="col-sm-10">
        <Field
          name="type"
          component="select"
          className="form-control"
        >
          <option value="">Select a type</option>
          {typeOptions.map(entry => (
            <option value={entry} key={entry}>
              {entry}
            </option>
          ))}
        </Field>
      </div>
    </div>
    <div className="form-group row">
      <label htmlFor="difficulty" className="col-sm-2 col-form-label">Difficulty</label>
      <div className="col-sm-10">
        <Field
          name="difficulty"
          component="select"
          className="form-control"
        >
          <option value="">Select a Difficulty</option>
          {difficultyOptions.map(entry => (
            <option value={entry} key={entry}>
              {entry}
            </option>
          ))}
        </Field>
      </div>
    </div>
    <p>{initialValues.tags.map(tag => <span key={tag} className="badge badge-pill badge-secondary event-tag">{tag}</span>)}</p>
    <div className="form-group row">
      <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
      <div className="col-sm-10">
        <Field
          name="description"
          component="textarea"
          className="form-control"
        />
      </div>
    </div>
  </form>
);

export default reduxForm({
  form: 'event'
})(EventForm);
