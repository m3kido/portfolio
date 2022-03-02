import React from 'react'
import { SidebarContainer,Icon,CloseIcon,SidebarWraapper,SidebarMenu,
SidebarLink,SideBtnWrap,SidebarRoute } from './SidebarElement';

const Sidebar = ({isOpen,toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
              <Icon onClick={toggle}>
                  <CloseIcon/>
              </Icon>
              <SidebarWraapper>
                  <SidebarMenu>
                      <SidebarLink to='about' onClick={toggle}>
                          About
                      </SidebarLink>
                      <SidebarLink to='discover' onClick={toggle}>
                          Discover
                      </SidebarLink>
                      <SidebarLink to='services' onClick={toggle}>
                          Services
      
                      </SidebarLink>
                      <SidebarLink to='signup' onClick={toggle}>
                          Sign up
      
                      </SidebarLink>
                  </SidebarMenu>
                  <SideBtnWrap>
                      <SidebarRoute to='/signIn' >Sign in</SidebarRoute>
                  </SideBtnWrap>
              </SidebarWraapper>
          </SidebarContainer>
  );
};

export default Sidebar;