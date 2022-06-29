import React, { useState } from "react";
import PropTypes from "prop-types";
import View from "views/Romans";
import { useGet } from "seed/api";
import { usePagination } from "seed/gql";
import { Loading } from "seed/helpers";

function Romans() {
  //const reqProccesses = useGet('/processes');
  const pageSize = 4;
  const [pageNum, setPageNum] = useState(1);

  const reqProccesses = usePagination(
    `
    {
      processPagination{
        totalPages,
        processes{
          id,
          input,
          result
        }
      } 
    }
  `, pageNum, pageSize);

  if (reqProccesses.loading) return <Loading />;
  if (reqProccesses.error) return "Error";
  const { processes = [], totalPages = 0 } = reqProccesses.data.processPagination;

  const onClickPage = (pageNum) => {
    setPageNum(pageNum);
  }

  return (
    <View
      processes={processes}
      pageNum={pageNum}
      totalPages={totalPages}
      onClickPage={onClickPage}
    />
  );
}

Romans.propTypes = {};

export default Romans;
