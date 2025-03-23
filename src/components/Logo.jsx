import React, { useContext } from 'react';
import Heading from './Heading';
import styled from 'styled-components';
import mickeyMouseDark from '../images/mickey-mouse.webp';
import mickeyMouseLight from '../images/mickey-mouse-light.webp';
import { DarkModeContext } from '../context/DarkModeContext';

const DivStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const ImgStyled = styled.img`
  width: 25px;
  height: auto;
`;

const Logo = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <DivStyled>
      <ImgStyled
        src={isDarkMode ? mickeyMouseLight : mickeyMouseDark}
        alt="Mickey Mouse"
      />
      <Heading as="h1">Disney App</Heading>
    </DivStyled>
  );
};

export default Logo;
