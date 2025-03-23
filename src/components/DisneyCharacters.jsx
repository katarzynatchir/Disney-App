import React from 'react';
import { useFetch } from '../hooks/useFetch';
import Loader from './Loader';
import ErrorMessage from './ErrorMessage';
import SingleCharacter from './SingleCharacter';
import styled from 'styled-components';

const URL = 'https://api.disneyapi.dev/character';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const DisneyCharacters = () => {
  const { data, isLoading, error } = useFetch(URL);

  return (
    <Container>
      {isLoading && <Loader />}
      {!isLoading &&
        !error &&
        data &&
        data.data.map(character => <SingleCharacter character={character} />)}
      {error && <ErrorMessage message={error} />}
    </Container>
  );
};

export default DisneyCharacters;
