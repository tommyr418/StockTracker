import React from 'react';
import { Route } from 'react-router-dom';

import LandingPageContainer from './pages/landing_page_container';
import MainSideNav from './modules/main_side_nav';

const App = () => (
  <div id="app">
    <Route path='/' component={ MainSideNav }/>
    <Route path='/quick-quotes' component={ LandingPageContainer }/>
    <Route exact path='/' component={ LandingPageContainer }/>
  </div>
);

export default App;
