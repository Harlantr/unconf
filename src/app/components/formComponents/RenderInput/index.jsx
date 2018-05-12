import React from 'react';
import ReactTooltip from 'react-tooltip';

const RenderInput = ({
  input,
  label,
  type,
  name,
  meta: { error }
}) => (
  <div className="form-group row">
    <label htmlFor={name} className="col-sm-2 col-form-label">{label}</label>
    <div className="col-sm-10">
      <input
        {...input}
        placeholder={label}
        type={type}
        className={`form-control ${error ? 'is-invalid' : null}`}
        data-tip={error || ''}
      />
      <ReactTooltip type="error" />
    </div>
  </div>
);

export default RenderInput;
