import React from "react";
import PropTypes from "prop-types";
import { Link, BrowserRouter } from "react-router-dom";
import ProcessCharacters from "components/ProcessCharacters";
import ProcessFormNew from "components/FormNew";
import { ModalRoute } from "seed/helpers";
import Process from "components/Process";

const Romans = ({
  processes,
  pageNum = 1,
  totalPages = 0,
  onClickPage = () => {},
}) => (
  <BrowserRouter basename="/romans">
    <div class="container mt-5" style={{ overflow: "scroll", height: "100%" }}>
      <div class="container w-50 clearfix mb-5 mt-2">
        <Link to="/new" className="btn btn-success float-right">
          EJECUTAR PROCESO
        </Link>
      </div>

      {processes.map((process) => Process(process))}

      <div class="container mb-5 mt-5">
        <div class="row m-0 justify-content-center">
          {Array(totalPages)
            .fill(0)
            .map((ignore, idx) => (
              <button
                onClick={() => onClickPage(idx + 1)}
                key={idx}
                class={
                  "btn btn-primary ml-3 mr-3 mb-5 " +
                  (idx == pageNum - 1 ? "active" : "")
                }
              >
                {idx + 1}
              </button>
            ))}
        </div>
      </div>

      {/* Modals */}
      <ModalRoute path="/new" component={ProcessFormNew} />
      <ModalRoute
        path="/:processId(\d+)/characters"
        component={ProcessCharacters}
      />
    </div>
  </BrowserRouter>
);

Romans.propTypes = {
  processes: PropTypes.array,
  pageNum: PropTypes.number,
  totalPages: PropTypes.number,
  onClickPage: PropTypes.func,
};

export default Romans;
