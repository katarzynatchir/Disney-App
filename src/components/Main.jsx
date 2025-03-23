import React from 'react';
import styled from 'styled-components';

const MainStyled = styled.main`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Main = ({ children }) => {
  return <MainStyled>{children}</MainStyled>;
};

export default Main;
