import React from 'react';
import styled from 'styled-components';
import Heading from './Heading';

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.5rem;
  width: 220px;
  height: 300px;
  border: 1px solid var(--color-grey);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
`;

const Img = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
`;

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

const SingleCharacter = ({ characters }) => {
  return (
    <>
      {characters.map(character => (
        <Box key={character.name}>
          <Img src={character.imageUrl} alt="{character.name}" />
          <Heading as="h2">{character.name}</Heading>
          <Button>Learn More</Button>
        </Box>
      ))}
    </>
  );
};

export default SingleCharacter;
