import React, { Component } from 'react';
import { Field, reduxForm, Form } from 'redux-form';

import './styles.scss';

const renderField = ({
  input, label, type, meta: { error }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {error && <span>{error}</span>}
    </div>
  </div>
);

class AssetFormComponent extends Component {
  handleClose = () => {
    this.props.actions.closeForm();
  };

  render() {
    const {
      isFormOpen,
      assetToEdit,
      handleSubmit,
      error
    } = this.props;

    if (!isFormOpen) {
      return null;
    }

    return (
      <div className="form-wrapper">
        <div className="form">
          <Form onSubmit={handleSubmit}>
            <Field
              name="name"
              type="text"
              component={renderField}
              label="Name"
            />
            {error && <strong>{error}</strong>}
            <button type="button" className="button_close" onClick={this.handleClose}>Cancel</button>
            <button type="submit" className="button_submit">{assetToEdit ? 'Save' : 'Create'}</button>
          </Form>
        </div>
      </div>
    );
  }
}

export const AssetForm = reduxForm({
  form: 'asset'
})(AssetFormComponent);
