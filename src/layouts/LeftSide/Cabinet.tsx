import React from 'react';
import styled from 'styled-components';
import {Link } from 'react-router-dom';

const CabinetWrapper = styled.div`
  color: white;
  border: solid #b4b9db;
  display: block;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Title = styled.div`
  background-color: #b4b9db;
  margin-bottom: 10px;
  padding-top: 20px; /* Add this line to set the top padding */
`;

const Content = styled.div`
  font-weight: bold;
  padding: 20px;
`;

const Cabinet: React.FC = () => {
  return (
      <CabinetWrapper>
        <Title>Cabinet</Title>
        <Content>
          <Link to="/signin">Sign In</Link>
          {' | '}
          <Link to="/register">Register</Link>
        </Content>
      </CabinetWrapper>
  );
};

export default Cabinet;