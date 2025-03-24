import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  height: 4.2rem;
  padding: 0 2rem;
  border-bottom: 1px solid var(--color-accent);
`;

const NavBar = ({ children }) => {
  return <Nav>{children}</Nav>;
};

export default NavBar;
