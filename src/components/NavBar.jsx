import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  height: 4.2rem;
  padding: 0 2rem;
  background-color: var(--color-background-light);
  border-bottom: 2px solid var(--color-background-dark);
`;

const NavBar = ({ children }) => {
  return <Nav>{children}</Nav>;
};

export default NavBar;
