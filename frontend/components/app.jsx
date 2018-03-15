import React from 'react';
import { Route } from 'react-router-dom';

import LandingPageContainer from './pages/landing_page_container';
import MainSideNav from './modules/main_side_nav';

const App = () => (
  <div>
    <Route path='/' component={ MainSideNav }/>
    <LandingPageContainer />
  </div>
);

export default App;
