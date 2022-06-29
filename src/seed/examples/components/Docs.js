/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React, { useEffect } from "react";

import View from "seed/examples/views/Examples";

function Docs(props) {
    useEffect(() => {
        window.location.replace("/docs/tutorial-010_general.html");
    }, []);
  return <View />;
}
Docs.propTypes = {};

export default Docs;