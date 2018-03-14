import React from 'react';
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';

const MainSideNav = () => (
  <div className='side-nav-container'>
    <SideNav highlightColor='#ffffff' highlightBgColor='#01bcd4'
      defaultSelected='sn-quick-quotes'>
            <Nav id='sn-quick-quotes'>
                <NavText> Quick Quotes </NavText>
            </Nav>
            <Nav id='sn-microsoft'>
                <NavText> Microsoft </NavText>
            </Nav>
            <Nav id='sn-facebook'>
                <NavText> Facebook </NavText>
            </Nav>
            <Nav id='sn-apple'>
                <NavText> Apple </NavText>
            </Nav>
            <Nav id='sn-google'>
                <NavText> Google </NavText>
            </Nav>
            <Nav id='sn-amazon'>
                <NavText> Amazon </NavText>
            </Nav>
        </SideNav>
  </div>
);

export default MainSideNav;
