/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { useDetail, useDelete } from "seed/gql";
import { DELETE_PROCESS } from "seed/gql/queries";
import { Loading } from "seed/helpers";
import View from "seed/examples/views/processes/Details";

function ProcessDetails({ processId, onCompleted = () => null, onError = () => null }) {

  const reqProcess = useDetail(`
  {
    process {
      input
      result
      createdAt
      user { }
    }
  }`, processId);
  
  const [callDelete] = useDelete(DELETE_PROCESS, {
    onCompleted: () =>
      onCompleted()
      //Note: When the component is wrap in a ModalRoute it bind the event 'closeModal()'
  });

  if (reqProcess.loading) return <Loading />;
  if (reqProcess.error) return "Error";
  const { process = {} } = reqProcess.data;

  const onClickDelete = () =>
    callDelete({ id: processId });

  return <View
    process={process}
    onClickDelete={onClickDelete}
   />;
}

ProcessDetails.propTypes = {
  processId: PropTypes.number.isRequired,
  onCompleted: PropTypes.func,
  onError: PropTypes.func
};

export default ProcessDetails;