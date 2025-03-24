import React from 'react';
import Modal from './Modal';
import { useFetch } from '../../hooks/useFetch';
import Loader from '../Loader';
import ErrorMessage from '../ErrorMessage';
import Heading from '../Heading';
import styled from 'styled-components';

const Img = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

const CharacterModal = ({ characterId, onClose }) => {
  const {
    data: character,
    isLoading,
    error,
  } = useFetch(`https://api.disneyapi.dev/character/${characterId}`);

  if (!character) return null;

  return (
    <>
      <Modal isOpen={true} onClose={onClose}>
        {isLoading && <Loader />}
        {error && <ErrorMessage message={error} />}
        <Img src={character.data.imageUrl} alt={character.data.name} />
        <Heading as="h2">{character.data.name}</Heading>
        <Container>
          {character.films?.length > 0 && (
            <p>
              <strong>Films:</strong> {character.films.join(', ')}
            </p>
          )}
          {character.data.shortFilms?.length > 0 && (
            <p>
              <strong>Short Films:</strong>{' '}
              {character.data.shortFilms.join(', ')}
            </p>
          )}
          {character.data.videoGames?.length > 0 && (
            <p>
              <strong>Video Games:</strong>{' '}
              {character.data.videoGames.join(', ')}
            </p>
          )}
          {character.data.tvShows?.length > 0 && (
            <p>
              <strong>TV Shows:</strong> {character.data.tvShows.join(', ')}
            </p>
          )}
        </Container>
      </Modal>
    </>
  );
};

export default CharacterModal;
