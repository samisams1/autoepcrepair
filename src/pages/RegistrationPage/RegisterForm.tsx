import React, { useState, ChangeEvent, FormEvent } from 'react';
import styled from 'styled-components';

const RegistrationFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RegistrationFormContainer = styled.form`
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

const RegistrationForm: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFullNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFullName(event.target.value);
  };

  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // Perform registration logic here (e.g., API call)
    console.log('Full Name:', fullName);
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    // Reset form fields
    setFullName('');
    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <RegistrationFormWrapper>
      <RegistrationFormContainer onSubmit={handleSubmit}>
        <h1>Registration Form</h1>
        <FormField>
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={handleFullNameChange}
          />
        </FormField>
        <FormField>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </FormField>
        <FormField>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </FormField>
        <FormField>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </FormField>
        <SubmitButton type="submit">Register</SubmitButton>
      </RegistrationFormContainer>
    </RegistrationFormWrapper>
  );
};

export default RegistrationForm;