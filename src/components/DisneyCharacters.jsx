import React, { useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import Loader from './Loader';
import ErrorMessage from './ErrorMessage';
import SingleCharacter from './SingleCharacter';
import styled from 'styled-components';
import Pagination from '@mui/material/Pagination';

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

const CustomPagination = styled(Pagination)`
  & .MuiPaginationItem-root {
    color: var(--color-grey-800);
    background-color: var(--color-grey-200);
  }

  & .MuiPaginationItem-root.Mui-selected {
    background-color: var(--color-primary-dark);
    color: var(--color-white-200);
  }

  & .MuiPaginationItem-root:hover {
    background-color: var(--color-primary-light);
  }
`;

const DisneyCharacters = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, error, totalPages } = useFetch(page);
  const handleSetPage = (e, value) => {
    setPage(value);
  };

  return (
    <Section>
      <Container>
        {isLoading && <Loader />}
        {!isLoading && !error && data && <SingleCharacter characters={data} />}
        {error && <ErrorMessage message={error} />}
      </Container>
      <CustomPagination count={totalPages} onChange={handleSetPage} />
    </Section>
  );
};

export default DisneyCharacters;
