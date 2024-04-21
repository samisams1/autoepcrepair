import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import SearchComponent from '../../layouts/Search/Search';
import { PageHeaderComponent } from '../../layouts/PageHeader';
import SidebarComponent from '../../layouts/Sidebar';
import Footer from '../../layouts/Footer/footer';
import Banner from '../HomePage/Banner';
import CartPage from './cart';

// Define the theme colors
const theme = {
  primaryColor: '#030E4F', // Golden color
  secondaryColor: '#b4b9db', // Black color
  requiredFieldColor: 'red', // Red color for required fields
};

const Content = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allow columns to wrap to the next line on smaller screens */
`;

const MainContentWrapper = styled.div`
  flex: 1;
  padding: 16px;
`;

const ColumnWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Panel = styled.div`
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 4px;
  padding: 20px;
  margin-bottom: 16px;
`;

const FirstColumn = styled(Panel)`
  color: black; // Set text color to black
`;

const SecondColumn = styled(Panel)``;

const RowWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 16px;
`;

const Field = styled.div`
  flex: 1;
  margin-bottom: 16px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
`;
const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const CheckboxLabel = styled.label`
  margin-left: 8px;
`;
const Carts: React.FC = () => {
  const [selectedPayment, setSelectedPayment] = useState<string>('');
  const handlePaymentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPayment(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <PageHeaderComponent />
      <Content>
        <SidebarComponent />
        <MainContentWrapper>
          <SearchComponent />
          <Banner />
          <div style={{ display: 'flex' }}>
            <ColumnWrapper>
              <FirstColumn>
                <RowWrapper>
                  <Field>
                    <Label htmlFor="name">Name*</Label>
                    <Input type="text" id="name" required />
                  </Field>
                </RowWrapper>
                <RowWrapper>
                  <Field>
                    <Label htmlFor="email">Email*</Label>
                    <Input type="email" id="email" required />
                  </Field>
                </RowWrapper>
                <RowWrapper>
                  <Field>
                    <Label htmlFor="country">Country</Label>
                    <Select id="country">
                      <option value="country1">Country 1</option>
                      <option value="country2">Country 2</option>
                      <option value="country3">Country 3</option>
                    </Select>
                  </Field>
                </RowWrapper>
                <label htmlFor="payment">Payment</label>
                <CheckboxWrapper>
                  <input
                    type="checkbox"
                    name="payment"
                    id="payment1"
                    value="payment1"
                    checked={selectedPayment === 'payment1'}
                    onChange={handlePaymentChange}
                  />
                  <CheckboxLabel htmlFor="payment1">Payment 1</CheckboxLabel>
                </CheckboxWrapper>
                <CheckboxWrapper>
                  <input
                    type="checkbox"
                    name="payment"
                    id="payment2"
                    value="payment2"
                    checked={selectedPayment === 'payment2'}
                    onChange={handlePaymentChange}
                  />
                  <CheckboxLabel htmlFor="payment2">Payment 2</CheckboxLabel>
                </CheckboxWrapper>
                <CheckboxWrapper>
                  <input
                    type="checkbox"
                    name="payment"
                    id="payment3"
                    value="payment3"
                    checked={selectedPayment === 'payment3'}
                    onChange={handlePaymentChange}
                  />
                  <CheckboxLabel htmlFor="payment3">Payment 3</CheckboxLabel>
                </CheckboxWrapper>
              </FirstColumn>
            </ColumnWrapper>
            <ColumnWrapper>
              <SecondColumn>
                <CartPage />
              </SecondColumn>
            </ColumnWrapper>
          </div>
        </MainContentWrapper>
      </Content>
      <Footer />
    </ThemeProvider>
  );
};

export default Carts;