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

          <div id="my-links">
            <span>Tommy Ren</span>
              <a href="https://github.com/tommyr418"
                target="_blank">
                <i className="fab fa-github" aria-hidden="true"></i>
                <span className="label">GitHub</span>
              </a>

              <a href="https://www.linkedin.com/in/mengling-tommy-ren-967647152/"
                target="_blank">
                <i className="fab fa-linkedin" aria-hidden="true"></i>
                <span className="label">LinkedIn</span>
              </a>

              <a href="https://angel.co/mengling-tommy-ren?public_profile=1"
                target="_blank">
                <i className="fab fa-angellist" aria-hidden="true"></i>
                <span className="label">AngelList</span>
              </a>

              <a href="http://tommyren.site"
                target="_blank">
                <i className="fa fa-globe" aria-hidden="true"></i>
                <span className="label">Portfolio</span>
              </a>
          </div>
    </div>
  );
};

export default MainSideNav;
