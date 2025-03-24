import React, { useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import Loader from '../Loader';
import ErrorMessage from '../ErrorMessage';
import SingleCharacter from './SingleCharacter';
import Paginate from './Pagination';
import styled from 'styled-components';
const URL = 'https://api.disneyapi.dev/character';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.7rem;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const DisneyCharacters = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = useFetch(`${URL}?page=${page}`);
  const characters = data?.data || [];
  const totalPages = data?.info?.totalPages || 1;

  const handleSetPage = (e, value) => {
    setPage(value);
  };

  return (
    <Section>
      <Container>
        {isLoading && <Loader />}
        {!isLoading && !error && data && (
          <SingleCharacter characters={characters} />
        )}
        {error && <ErrorMessage message={error} />}
      </Container>
      <Paginate
        totalPages={totalPages}
        page={page}
        onPageChange={handleSetPage}
      />
    </Section>
  );
};

export default DisneyCharacters;
