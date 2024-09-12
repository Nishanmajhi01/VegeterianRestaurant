import React from 'react';
import styled from 'styled-components';
const NavWrapper = styled.nav`
  padding: 10px;
`;

const NavList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 25px;
`;

const NavItem = styled.li`
  margin-right: 10px;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: Black;
  font-weight: bold;
  font-size: 1.5em;
`;


function Nav() {
  return (
    <NavWrapper>
      <NavList >
        <NavItem>
            <NavLink href="#home">Home</NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="#about">About</NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="#services">Menu</NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="#contact">Reservation</NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="#contact">Order online</NavLink>
        </NavItem>
        <NavItem>
            <button className="login">LOG IN</button>
        </NavItem>
      </NavList>
    </NavWrapper>
  );
}

export default Nav;