import React from 'react';
import styled from 'styled-components';

const LoginFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const FormField = styled.div`
  margin-bottom: 20px;
  width: 100%;

  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }

  input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 16px;
`;

const LoginFormNew: React.FC = () => {
  return (
    <LoginFormWrapper>
      <LoginFormContainer>
        <h1>Login Page</h1>
        <FormField>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" />
        </FormField>
        <FormField>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" />
        </FormField>
        <SubmitButton type="submit">Login</SubmitButton>
      </LoginFormContainer>
    </LoginFormWrapper>
  );
};

export default LoginFormNew;