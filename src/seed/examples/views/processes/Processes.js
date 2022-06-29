/*
__Seed builder__
  (Read_only) Example view
  Be careful copying content
*/

import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";

import ProcessDetails from "seed/examples/components/processes/Details";
import ProcessList from "seed/examples/components/processes/List";
import ProcessFormSave from "seed/examples/components/processes/FormSave";
import ProcessFormSet from "seed/examples/components/processes/FormSet";
import { ModalRoute } from "seed/helpers";

const Processes = () =>
  <BrowserRouter basename="/examples/processes">
    <div class="content container-fluid">

    {/* Header */}
    <div class="page-header">
      <div class="row align-items-end">

        <div class="col-sm">
          <h1 class="page-header-title">Processes</h1>
        </div>

        <div class="col-sm-auto">
          <div class="btn-group" role="group">
            <Link to="/create" className="btn btn-primary">
              <i class="tio-add mr-1"></i>Create
            </Link>
          </div>
        </div>

      </div>
    </div>

    {/* List */}
    <ProcessList />

    {/* Modals */}
    <ModalRoute
        path="/:processId(\d+)"
        component={ProcessDetails} />
    <ModalRoute
      path="/create"
      component={ProcessFormSave} />
    <ModalRoute
      path="/:processId(\d+)/edit"
      component={ProcessFormSet} />

    </div>
  </BrowserRouter>;

Processes.propTypes = {};

export default Processes;