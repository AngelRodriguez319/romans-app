/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import { PROCESS, SET_PROCESS } from "seed/gql/queries";
import { Loading } from "seed/helpers";
import View from "seed/examples/views/processes/Form";

function ProcessFormSet({ processId, onCompleted = () => null, onError = () => null  }) {

  const qProcess = useDetail(PROCESS, processId);
  const qUsers = useQuery(`{ users { } }`);
  const [callSet, qSet] = useSet(SET_PROCESS, {
    onCompleted: () =>
      onCompleted()
      //Note: When the component is wrap in a ModalRoute it bind the event 'closeModal()'
  });

  if (qProcess.loading) return <Loading />;

  const { process = {} } = qProcess.data;
  const { users = [] } = qUsers.data;
  const error = qSet.error ? "An error has occurred" : null;

  const onSubmit = (values) => {
    values.id = processId;
    callSet(values);
  };

  return <View
    process={process}
    users={users}
    error={error}
    onSubmit={onSubmit}
  />;
}

ProcessFormSet.propTypes = {
  processId: PropTypes.number.isRequired,
  onCompleted: PropTypes.func,
  onError: PropTypes.func
};

export default ProcessFormSet;