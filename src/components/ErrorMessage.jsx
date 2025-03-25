import React from 'react';
import Heading from './Heading';

const ErrorMessage = ({ message }) => {
  return (
    <Heading as="h2">
      <span>🛑 </span>
      {message}
    </Heading>
  );
};

export default ErrorMessage;
