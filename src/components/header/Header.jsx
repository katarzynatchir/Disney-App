import React from 'react';
import styled from 'styled-components';

const Nav = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  height: 4.2rem;
  padding: 0 2rem;
  border-bottom: 1px solid var(--color-accent);
`;

const Header = ({ children }) => {
  return <Nav>{children}</Nav>;
};

export default Header;
