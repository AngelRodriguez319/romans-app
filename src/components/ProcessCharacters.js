import React from "react";
import PropTypes from "prop-types";
import View from "views/ProcessCharacters";
import { useGet } from "seed/api";
import { Loading } from "seed/helpers";

function ProcessCharacters({ processId }) {
  const reqCharacters = useGet(`/processes/${processId}/characters`);

  if (reqCharacters.loading) return <Loading />;
  if (reqCharacters.error) return "Error";

  const data = reqCharacters.data;

  return <View characters={data} processId={processId} />;
}

ProcessCharacters.propTypes = {
  processId: PropTypes.number.isRequired,
};

export default ProcessCharacters;
