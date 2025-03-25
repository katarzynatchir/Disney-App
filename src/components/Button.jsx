import styled from 'styled-components';

const Button = styled.button`
  font-size: 1.1rem;
  padding: 0.8rem 1.6rem;
  border: none;
  background-color: var(--color-primary);
  border-radius: var(--border-radius);
  cursor: pointer;

  &:hover {
    background-color: var(--color-primary-dark);
  }
`;

export default Button;
