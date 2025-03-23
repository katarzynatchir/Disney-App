import styled, { css } from 'styled-components';

const sizes = {
  fullwidth: css`
    width: 100%;
  `,
  normal: css`
    width: auto;
  `,
};

const Button = styled.button`
  font-size: 1.1rem;
  padding: 0.8rem 1.6rem;
  border: none;
  background-color: var(--color-primary);
  cursor: pointer;

  &:hover {
    background-color: var(--color-primary-dark);
  }
`;

export default Button;
