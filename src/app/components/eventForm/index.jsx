import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {
  required,
  maxLength
} from '../../../utils/redux-form-validators';
import typeOptions from '../../../constants/typeOptions';
import difficultyOptions from '../../../constants/difficultyOptions';
import RenderInput from '../formComponents/RenderInput';
import RenderTextarea from '../formComponents/RenderTextarea';
import RenderSelect from '../formComponents/RenderSelect';

// Custom maxLength validation function
const maxLen50 = maxLength(50);
const maxLen500 = maxLength(500);

const EventForm = ({ initialValues }) => (
  <form>
    <div className="form-group row">
      <h5>All fields are required.</h5>
    </div>
    <Field
      name="title"
      label="Title"
      component={RenderInput}
      type="text"
      validate={[required, maxLen50]}
    />
    <Field
      name="creator"
      label="Creator"
      component={RenderInput}
      type="text"
      validate={[required, maxLen50]}
    />
    <Field
      name="type"
      label="Type"
      component={RenderSelect}
      options={typeOptions}
      type="textarea"
      validate={[required]}
    />
    <Field
      name="difficulty"
      label="Difficulty"
      component={RenderSelect}
      options={difficultyOptions}
      type="textarea"
      validate={[required]}
    />
    <Field
      name="description"
      label="Description"
      component={RenderTextarea}
      type="textarea"
      validate={[required, maxLen500]}
    />
    <p>{initialValues.tags.map(tag => <span key={tag} className="badge badge-pill badge-secondary event-tag">{tag}</span>)}</p>
  </form>
);

export default reduxForm({
  form: 'event'
})(EventForm);
