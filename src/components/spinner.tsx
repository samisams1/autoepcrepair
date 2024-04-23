import React from 'react';
import styled from 'styled-components';

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5; /* Set the background color here */
`;

const Spinner = () => {
  return (
    <SpinnerWrapper>
      <div className="spinner"></div>
    </SpinnerWrapper>
  );
};

export default Spinner;