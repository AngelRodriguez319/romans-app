import React from "react";
import PropTypes from "prop-types";
import { Formik, Field, Form } from "formik";

const FormNew = ({ process = {}, users = [], onSubmit, error }) => (
  <div class="card">
    {/* Header */}
    <div class="card-header">
      <h3 class="card-header-title">Decimal to Roman</h3>
    </div>

    {/* Body */}
    <div class="card-body">
      <div class="row">
        <div class="col">
          <Formik initialValues={process} onSubmit={onSubmit}>
            {({ values, setFieldValue }) => (
              <Form>
                <div class="mb-3">
                  {/* Input */}
                  <div class="form-group">
                    <label class="input-label">Input</label>
                    <Field type="number" name="input" class="form-control" />
                  </div>
                  {/* User */}
                  <div class="form-group">
                    <div>
                      <label class="input-label">User</label>
                      <Field
                        component="select"
                        name="user_id"
                        class="form-control"
                      >
                        <option value="">Select an option</option>
                        {users.map( user => (
                          <option key={user.id} value={user.id}>
                            {user.username}
                          </option>
                        ))}
                      </Field>
                    </div>
                  </div>
                </div>
                {error ? (
                  <div class="alert alert-soft-danger">{error}</div>
                ) : null}
                <button type="submit" class="btn btn-block btn-primary">
                  Send
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  </div>
);

FormNew.propTypes = {
  process: PropTypes.object,
  users: PropTypes.array,
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default FormNew;
