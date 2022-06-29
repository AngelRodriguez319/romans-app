/*
__Seed builder__
  (Read_only) Example test
  Be careful copying content
*/

import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import { render, mockGql } from 'seed/jest';
import * as data from 'seed/examples/tests/data'
import Details from 'seed/examples/components/processes/Details';

test('examples/components/processes/Details', () => {
  mockGql.useDetail({"process": data.GQL_PROCESS});
  mockGql.useDelete({"deleteProcess": data.GQL_PROCESS});
  render(<Details />);
  expect(screen).toBeDefined()
});