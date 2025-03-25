import Pagination from '@mui/material/Pagination';
import styled from 'styled-components';

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

const Paginate = ({ totalPages, page, onPageChange }) => {
  return (
    <CustomPagination count={totalPages} page={page} onChange={onPageChange} />
  );
};

export default Paginate;
