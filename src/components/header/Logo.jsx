import React, { useContext } from 'react';
import styled from 'styled-components';
import Heading from '../Heading';
import mickeyMouseDark from '../../images/mickey-mouse.webp';
import mickeyMouseWhite from '../../images/mickey-mouse-white.webp';
import { DarkModeContext } from '../../context/DarkModeContext';

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
        src={isDarkMode ? mickeyMouseWhite : mickeyMouseDark}
        alt="Logo"
      />
      <Heading as="h1">Disney App</Heading>
    </DivStyled>
  );
};

export default Logo;
