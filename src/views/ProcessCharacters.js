import React from "react";
import PropTypes from "prop-types";

const ProcessCharacters = ({ characters, processId }) =>
  <div class="card">

    {/* Header */}
    <div class="card-header justify-content-center p-5 border-bottom border-dark">
      <h3 class="card-header-title">PROCESO {processId}</h3>
    </div>

    {/* Body */}
    <div class="card-body p-5">
      <div class="row">
        <div class="col">
          <h2>CARACTERES ÚNICOS</h2>
          <div class="row border border-dark justify-content-center align-items-center pt-5 pb-5 m-0">
            <p>{characters.join(" ")}</p>
          </div>
        </div>
      </div>
    </div>

  </div>;

ProcessCharacters.propTypes = {
  characters: PropTypes.array,
  processId: PropTypes.number
};

export default ProcessCharacters;