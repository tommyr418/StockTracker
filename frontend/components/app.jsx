import React from 'react';
import { Route } from 'react-router-dom';

import MainSideNav from './modules/main_side_nav';
import LandingPageContainer from './pages/landing_page_container';
import CompanyPageContainer from './pages/company_page_container';

const App = () => (
  <div id="app">
    <Route path='/' component={ MainSideNav }/>
    <Route exact path='/' component={ LandingPageContainer }/>
    <Route path='/quick-quotes' component={ LandingPageContainer }/>
    <Route path='/microsoft' component={ CompanyPageContainer }/>
    <Route path='/facebook' component={ CompanyPageContainer }/>
    <Route path='/apple' component={ CompanyPageContainer }/>
    <Route path='/google' component={ CompanyPageContainer }/>
    <Route path='/amazon' component={ CompanyPageContainer }/>
  </div>
);

export default App;
