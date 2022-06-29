import React from "react";
import PropTypes from "prop-types";
import View from "views/Process";

function Process(process) {
  return <View process={process} />;
}

Process.propTypes = {
  process: PropTypes.object
};

export default Process;