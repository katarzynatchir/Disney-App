import React, { useState } from 'react';
import styled from 'styled-components';
import Heading from '../Heading';
import CharacterModal from '../modal/CharacterModal';
import Button from '../Button';

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.5rem;
  width: 220px;
  height: 300px;
  border: 1px solid var(--color-accent);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
`;

const Img = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
`;

const SingleCharacter = ({ characters }) => {
  const [selectedCharacterId, setSelectedCharacterId] = useState(null);
  const handleOpenModal = id => setSelectedCharacterId(id);
  const handleCloseModal = () => setSelectedCharacterId(null);

  return (
    <>
      {characters.map(character => (
        <Box key={`${character.name}-${character.createdAt}`}>
          <Img src={character.imageUrl} alt={character.name} />
          <Heading as="h2">{character.name}</Heading>
          <Button onClick={() => handleOpenModal(character._id)}>
            Learn More
          </Button>
        </Box>
      ))}
      {selectedCharacterId && (
        <CharacterModal
          characterId={selectedCharacterId}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default SingleCharacter;
