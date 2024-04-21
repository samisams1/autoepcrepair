import React, { useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { PageHeaderComponent } from '../../layouts/PageHeader';
import Footer from '../../layouts/Footer/footer';
import SidebarComponent from '../../layouts/Sidebar';
import { Content, MainContentWrapper, theme } from '../product/ProductPage';
import Banner from '../HomePage/Banner';
import SearchComponent from '../../layouts/Search/Search';
import { Heading } from '../../layouts/common/common';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Order = () => {
  const { id } = useParams();
  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await axios.get('http://localhost:4000/orders/1');
        console.log(response.data); // You can handle the order data as needed
      } catch (error) {
        console.error(error);
      }
    };

    fetchOrder();
  }, []);
  
  return (
    <ThemeProvider theme={theme}>
      <PageHeaderComponent />
      <Content>
        <SidebarComponent />
        <MainContentWrapper>
          <SearchComponent />
          <Banner />
          <Heading>{id}</Heading>
          <Row>
            <FirstColumn>
              <ConfirmationMessage>
                Dear customer,
                <br />
                Thank you for placing your order!
                <br />
                <br />
                The order confirmation email has been sent to fobhhrsamisams@gmail.com.
                <br />
                <br />
                Your order was accepted and forwarded to the sales department.
              </ConfirmationMessage>
              <PaymentMethod>
                Payment Method: PayPal
              </PaymentMethod>
              <ContactInfo>
                If you have any questions, please do not hesitate to contact us at any time:
                <br />
                - by email: consult@epcatalogs.com
                <br />
                - Skype: epc.sales
                <br />
                <br />
                Best Regards!
                <br />
                epcatalogs.com
              </ContactInfo>
            </FirstColumn>
            <SecondColumn>
              <OrderDetails>
                <DetailTitle>Order Details</DetailTitle>
                <DetailItem>
                  Date: 2024-04-21
                </DetailItem>
                <DetailItem>
                  Payment Type: Visa/MasterCard
                </DetailItem>
                <DetailItem>
                  Status: New (waiting for payment...)
                </DetailItem>
              </OrderDetails>
              <ItemDetail>
                <DetailTitle>Item Detail</DetailTitle>
                <Table>
                  <thead>
                    <tr>
                      <TableHeader>Item</TableHeader>
                      <TableHeader>Quantity</TableHeader>
                      <TableHeader>Price</TableHeader>
                    </tr>
                  </thead>
                  <tbody>
                    <TableRow>
                      <TableData>Product 1</TableData>
                      <TableData>2</TableData>
                      <TableData>$20</TableData>
                    </TableRow>
                    <TableRow>
                      <TableData>Product 2</TableData>
                      <TableData>1</TableData>
                      <TableData>$10</TableData>
                    </TableRow>
                    <TableRow>
                      <TableData>Product 3</TableData>
                      <TableData>3</TableData>
                      <TableData>$15</TableData>
                    </TableRow>
                  </tbody>
                </Table>
                <DetailTitle>Your Personal Details</DetailTitle>
                <Table>
                  <thead>
                    <tr>
                      <TableHeader>Item</TableHeader>
                      <TableHeader>Quantity</TableHeader>
                      <TableHeader>Price</TableHeader>
                    </tr>
                  </thead>
                  <tbody>
                    <TableRow>
                      <TableData>Product 1</TableData>
                      <TableData>2</TableData>
                      <TableData>$20</TableData>
                    </TableRow>
                    <TableRow>
                      <TableData>Product 2</TableData>
                      <TableData>1</TableData>
                      <TableData>$10</TableData>
                    </TableRow>
                    <TableRow>
                      <TableData>Product 3</TableData>
                      <TableData>3</TableData>
                      <TableData>$15</TableData>
                    </TableRow>
                  </tbody>
                </Table>
              </ItemDetail>
            </SecondColumn>
          </Row>
        </MainContentWrapper>
      </Content>
      <Footer />
    </ThemeProvider>
  );
}

export default Order;

const Row = styled.div`
  display: flex;
`;

const FirstColumn = styled.div`
  flex: 1;
`;

const ConfirmationMessage = styled.p`
  margin-bottom: 20px;
`;

const PaymentMethod = styled.p`
  margin-bottom: 10px;
`;

const ContactInfo = styled.p`
  margin-top: 20px;
`;

const SecondColumn = styled.div`
  flex: 1;
  margin-left: 20px;
`;

const OrderDetails = styled.div`
  margin-bottom: 20px;
`;

const DetailTitle = styled.h3`
  margin-bottom: 10px;
`;

const DetailItem = styled.p`
  margin-bottom: 5px;
`;

const ItemDetail = styled.div`
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
`;

const TableHeader = styled.th`
  background-color: #f2f2f2;
  padding: 8px;
  text-align: left;
  border: 1px solid #ddd;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableData = styled.td`
  padding: 8px;
  border: 1px solid #ddd;
`;
/*
import React, { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { PageHeaderComponent } from '../../layouts/PageHeader';
import Footer from '../../layouts/Footer/footer';
import SidebarComponent from '../../layouts/Sidebar';
import { Content, MainContentWrapper, theme } from '../product/ProductPage';
import Banner from '../HomePage/Banner';
import SearchComponent from '../../layouts/Search/Search';
import { Heading } from '../../layouts/common/common';
import { useParams } from 'react-router-dom';
import axios from 'axios';
interface OrderItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

const Order = () => {
  const { id } = useParams();
  const [orderData, setOrderData] = useState<OrderItem[]>([]);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await axios.get('http://localhost:4000/orders/1');
        console.log(response.data); // You can handle the order data as needed
        setOrderData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchOrder();
  }, []);
  
  if (orderData.length === 0) {
    return <div>Loading order data...</div>;
  }
  return (
    <ThemeProvider theme={theme}>
      <PageHeaderComponent />
      <Content>
        <SidebarComponent />
        <MainContentWrapper>
          <SearchComponent />
          <Banner />
          <Heading>{id}</Heading>
          <Row>
            <FirstColumn>
              <ConfirmationMessage>
                Dear customer,
                <br />
                Thank you for placing your order!
                <br />
                <br />
                The order confirmation email has been sent to fobhhrsamisams@gmail.com.
                <br />
                <br />
                Your order was accepted and forwarded to the sales department.
              </ConfirmationMessage>
              <PaymentMethod>
                Payment Method: PayPal
              </PaymentMethod>
              <ContactInfo>
                If you have any questions, please do not hesitate to contact us at any time:
                <br />
                - by email: consult@epcatalogs.com
                <br />
                - Skype: epc.sales
                <br />
                <br />
                Best Regards!
                <br />
                epcatalogs.com
              </ContactInfo>
            </FirstColumn>
            <SecondColumn>
              <OrderDetails>
                <DetailTitle>Order Details</DetailTitle>
                <DetailItem>
                  Date: 2024-04-21
                </DetailItem>
                <DetailItem>
                  Payment Type: Visa/MasterCard
                </DetailItem>
                <DetailItem>
                  Status: New (waiting for payment...)
                </DetailItem>
              </OrderDetails>
              <ItemDetail>
              <DetailTitle>Item Detail</DetailTitle>
                <Table>
                  <thead>
                    <tr>
                      <TableHeader>Item</TableHeader>
                      <TableHeader>Quantity</TableHeader>
                      <TableHeader>Price</TableHeader>
                    </tr>
                  </thead>
                  <tbody>
                    {orderData.map((item) => (
                      <TableRow key={item.id}>
                        <TableData>{item.name}</TableData>
                      </TableRow>
                    ))}
                  </tbody>
                </Table>
                <DetailTitle>Your Personal Details</DetailTitle>
                <Table>
                  <thead>
                    <tr>
                      <TableHeader>Item</TableHeader>
                      <TableHeader>Quantity</TableHeader>
                      <TableHeader>Price</TableHeader>
                    </tr>
                  </thead>
                  <tbody>
                    <TableRow>
                      <TableData>Product 1</TableData>
                      <TableData>2</TableData>
                      <TableData>$20</TableData>
                    </TableRow>
                    <TableRow>
                      <TableData>Product 2</TableData>
                      <TableData>1</TableData>
                      <TableData>$10</TableData>
                    </TableRow>
                    <TableRow>
                      <TableData>Product 3</TableData>
                      <TableData>3</TableData>
                      <TableData>$15</TableData>
                    </TableRow>
                  </tbody>
                </Table>
              </ItemDetail>
            </SecondColumn>
          </Row>
        </MainContentWrapper>
      </Content>
      <Footer />
    </ThemeProvider>
  );
}

export default Order;

const Row = styled.div`
  display: flex;
`;

const FirstColumn = styled.div`
  flex: 1;
`;

const ConfirmationMessage = styled.p`
  margin-bottom: 20px;
`;

const PaymentMethod = styled.p`
  margin-bottom: 10px;
`;

const ContactInfo = styled.p`
  margin-top: 20px;
`;

const SecondColumn = styled.div`
  flex: 1;
  margin-left: 20px;
`;

const OrderDetails = styled.div`
  margin-bottom: 20px;
`;

const DetailTitle = styled.h3`
  margin-bottom: 10px;
`;

const DetailItem = styled.p`
  margin-bottom: 5px;
`;

const ItemDetail = styled.div`
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
`;

const TableHeader = styled.th`
  background-color: #f2f2f2;
  padding: 8px;
  text-align: left;
  border: 1px solid #ddd;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableData = styled.td`
  padding: 8px;
  border: 1px solid #ddd;
`;
*/