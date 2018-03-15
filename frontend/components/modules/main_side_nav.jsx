import React from 'react';
import { withRR4, Nav, NavIcon, NavText } from 'react-sidenav';

const SideNav = withRR4();

const MainSideNav = (props) => {
  return (
    <div className='side-nav-container'>
      <SideNav highlightColor='#ffffff' highlightBgColor='#01bcd4'
        defaultSelected={ props.location.pathname === '/'
          ?
          'quick-quotes' : props.location.pathname.slice(1) }>
              <Nav id='quick-quotes'>
                  <NavText> Quick Quotes </NavText>
              </Nav>
              <Nav id='microsoft'>
                  <NavText> Microsoft </NavText>
              </Nav>
              <Nav id='facebook'>
                  <NavText> Facebook </NavText>
              </Nav>
              <Nav id='apple'>
                  <NavText> Apple </NavText>
              </Nav>
              <Nav id='google'>
                  <NavText> Google </NavText>
              </Nav>
              <Nav id='amazon'>
                  <NavText> Amazon </NavText>
              </Nav>
          </SideNav>
    </div>
  );
};

export default MainSideNav;
