import React from 'react';
import styled from 'styled-components';

const MainStyled = styled.main`
  padding: 3rem 2rem;
`;

const Main = ({ children }) => {
  return <MainStyled>{children}</MainStyled>;
};

export default Main;
