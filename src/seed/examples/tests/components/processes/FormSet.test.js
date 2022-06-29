/*
__Seed builder__
  (Read_only) Example test
  Be careful copying content
*/

import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import { render, mockGql } from 'seed/jest';
import * as data from 'seed/examples/tests/data';
import FormSet from 'seed/examples/components/processes/FormSet';

test('examples/components/processes/FormSet', () => {
  mockGql.useDetail({"process": data.GQL_PROCESS});
  mockGql.useQuery({"users": data.GQL_USERS});
  mockGql.useSet({"setProcess": data.GQL_PROCESS});
  render(<FormSet />);
  expect(screen).toBeDefined();
});