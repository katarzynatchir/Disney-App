import styled, { css } from 'styled-components';

const Heading = styled.h1`
  font-family: 'Winky Sans', sans-serif;

  ${props =>
    props.as === 'h1' &&
    css`
      font-weight: 600;
      font-size: 1.5rem;
    `}
  ${props =>
    props.as === 'h2' &&
    css`
      font-weight: 500;
      font-size: 1.2rem;
    `}
`;

export default Heading;
