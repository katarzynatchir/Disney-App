import React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import styled from 'styled-components';

const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
`;

const Loader = () => {
  return (
    <LoaderContainer>
      <CircularProgress size={40} thickness={4} />
    </LoaderContainer>
  );
};

export default Loader;
