import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Process = ({ process }) => (
  <div>
    <div key={process.id} class="row mt-2">
      <div class="col m-0 row justify-content-center">
        <div class="card h-100 w-50">
          <div class="card-body pb-0">
            <div class="row mb-2">
              <div class="col W-50">
                <h2>PROCESO {process.id}</h2>
                <p>
                  {process.input} : {process.result}
                </p>
              </div>
              <div class="col W-50 d-block">
                <Link
                  to={`/${process.id}/characters`}
                  className="btn btn-primary float-md-right"
                >
                  CARACTERES
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

Process.propTypes = {
  process: PropTypes.object
};

export default Process;
