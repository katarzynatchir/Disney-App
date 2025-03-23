import React from 'react';
import styled from 'styled-components';
import Heading from './Heading';
import Button from './Button';

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  width: 220px;
  height: 260px;
  border: 1px solid var(--color-grey);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
`;

const Img = styled.img``;
const SingleCharacter = ({ character }) => {
  return (
    <Box key={character.id}>
      <img
        src={character.imageUrl}
        alt="{character.name}"
        width={220}
        height={150}
      />
      <Heading as="h2">{character.name}</Heading>
      <Button sizes="normal">Learn More</Button>
    </Box>
  );
};

export default SingleCharacter;
