import React from 'react';
import { NotFoundWrapper } from './styled';

const NotFound = () => {
  return (
    <NotFoundWrapper>
    <div className='container'>
      <h1>404 - Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
    </NotFoundWrapper>
  );
};

export default NotFound;