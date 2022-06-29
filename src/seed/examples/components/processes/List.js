/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React, { useState } from "react";
import { usePagination } from "seed/gql";
import { Loading } from "seed/helpers";
import View from "seed/examples/views/processes/List";

function ProcessList() {

  const pageSize = 15;
  const [pageNum, setPageNum] = useState(1);
  const reqProcesses = usePagination(`
  {
    processPagination {
      totalPages
      processes {
        input
        result
        createdAt
        user { }
      }
    }
  }`, pageNum, pageSize);

  if (reqProcesses.loading) return <Loading />;
  if (reqProcesses.error) return "Error";
  const { processes = [], totalPages = 0 } = reqProcesses.data.processPagination;

  const onClickPage = (pageNum) =>
    setPageNum(pageNum);

  return <View
    processes={processes}
    pageNum={pageNum}
    totalPages={totalPages}
    onClickPage={onClickPage}
  />;
}

ProcessList.propTypes = {};

export default ProcessList;