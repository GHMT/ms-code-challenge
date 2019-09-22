import React from 'react';

import AppHeader from '../shared/components/app-header';
import Router from './Router';
import { IDummyProps } from './types';

const Home = (props: IDummyProps) => (
  <div className="App">
    <AppHeader />
    <div className="container mt-4 mb-4">
      <Router match={props.match} />
    </div>
  </div>
);

export default Home;
