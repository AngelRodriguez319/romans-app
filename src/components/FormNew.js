import React from "react";
import PropTypes from "prop-types";
import View from "views/FormNew";
import {useQuery, useSave} from "seed/gql"
import {usePost} from "seed/api"

function ProcessFormNew({ onCompleted = () => null, onError = () => null }) {
  
  const qUsers = useQuery(`
    { 
      users {
        id,
        email,
        username
      } 
    }
  `);
  
  const [callPost, reqPost] = usePost("/processes/decimal_to_roman", {
    onCompleted: () => onCompleted()
  });

  const { users = [] } = qUsers.data;
  const error = reqPost.error ? "An error has occurred" : null;

  const onSubmit = (values) => callPost(values);

  return <View
    users={users}
    error={error}
    onSubmit={onSubmit}
  />;
}

ProcessFormNew.propTypes = {
  onCompleted: PropTypes.func,
  onError: PropTypes.func
};

export default ProcessFormNew;