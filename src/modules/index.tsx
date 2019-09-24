import React from 'react';

import AppHeader from '../shared/components/app-header';
import Router from './Router';
import { IDummyProps } from './types';
import MSLogo from '../assets/ms-logo.svg';

const Home = (props: IDummyProps) => (
  <div className="App">
    <AppHeader logo={MSLogo}/>
    <div className="container mt-4 mb-4">
      <Router match={props.match} />
    </div>
  </div>
);

export default Home;
