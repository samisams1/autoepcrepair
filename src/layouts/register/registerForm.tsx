import React, { useState } from 'react';
import styled from 'styled-components';

interface CategoryFormProps {
  onSubmit: (category: Category) => void;
}

interface Category {
  fullName: string;
  email:string;
  password:string;
}

const RegistrationForm: React.FC<CategoryFormProps> = ({ onSubmit }) => {
  const [category, setCategory] = useState<Category>({ fullName: '',email: '',password: '' });
  const [successMessage, setSuccessMessage] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategory({ ...category, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (category.fullName.trim() === '') {
      // Handle validation error
      return;
    }
    onSubmit(category);
    setSuccessMessage(true);
    setTimeout(() => {
      setSuccessMessage(false);
    }, 5000);
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <InputContainer>
          <InputLabel>Full Name:</InputLabel>
          <TextInput
            type="text"
            name="fullName"
            value={category.fullName}
            onChange={handleInputChange}
            required
          />
                   <InputLabel>Email:</InputLabel>
           <TextInput
            type="text"
            name="email"
            value={category.email}
            onChange={handleInputChange}
            required
          />
                   <InputLabel>Password:</InputLabel>
           <TextInput
            type="text"
            name="password"
            value={category.password}
            onChange={handleInputChange}
            required
          />
          {successMessage && <SuccessMessage>Registered successfully!</SuccessMessage>}
        </InputContainer>
        <SubmitButton type="submit">Register</SubmitButton>
      </Form>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const InputContainer = styled.div`
  margin-bottom: 20px;
`;

const InputLabel = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const TextInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  transition: border-color 0.3s;
  &:focus {
    outline: none;
    border-color: #0070f3;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: green;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #0070f3;
  }
`;

const SuccessMessage = styled.p`
  color: green;
  text-align: center;
`;

export default RegistrationForm;