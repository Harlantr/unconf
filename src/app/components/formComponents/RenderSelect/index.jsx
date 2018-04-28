import React from 'react';
import ReactTooltip from 'react-tooltip';

const RenderSelect = ({
  input,
  label,
  type,
  name,
  options,
  meta: { error }
}) => (
  <div className="form-group row">
    <label htmlFor={name} className="col-sm-2 col-form-label">{label}</label>
    <div className="col-sm-10">
      <select
        {...input}
        placeholder={label}
        type={type}
        className={`form-control ${error ? 'is-invalid' : null}`}
        data-tip={error || ''}
      >
        <option value="">Select an option</option>
        {options.map(entry => (
          <option value={entry} key={entry}>
            {entry}
          </option>
          ))}
      </select>
      <ReactTooltip type="error" />
    </div>
  </div>
);

export default RenderSelect;
