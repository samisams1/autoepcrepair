import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CabinetWrapper = styled.div`
  color: white;
  border: solid #b4b9db;
  display: block;
  margin-top: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Title = styled.div`
  background-color: #b4b9db;
  margin-bottom: 10px;
  padding-top: 20px;
`;

const Content = styled.div`
  font-weight: bold;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const ImportantInfo: React.FC = () => {
  return (
      <CabinetWrapper>
        <Title>Important Information</Title>
        <Content>
          <Link to="/signin">samisams</Link>
          <Link to="/signin">samisams</Link>
          <Link to="/signin">samisams</Link>
          <Link to="/signin">samisams</Link>
          <Link to="/signin">samisams</Link>
          <Link to="/signin">samisams</Link>
          <Link to="/signin">samisams</Link>
        </Content>
      </CabinetWrapper>
  );
};

export default ImportantInfo;