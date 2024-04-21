import React, { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import axios from 'axios';
import { PageHeaderComponent } from '../../layouts/PageHeader';
import SidebarComponent from '../../layouts/Sidebar';
import SearchComponent from '../../layouts/Search/Search';
import Banner from '../HomePage/Banner';
import Footer from '../../layouts/Footer/footer';
import Button from '../../components/Button/Button';
// Define the theme colors
const theme = {
  primaryColor: '#030E4F', // Golden color
  secondaryColor: '#b4b9db', // Black color
};

const Content = styled.div`
  flex: 1;
  display: flex;
`;

const MainContentWrapper = styled.div`
  flex: 1;
  padding: 16px;
`;
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  th,
  td {
    border: 1px solid black;
    padding: 8px;
    text-align: left;
  }
  th {
    background-color: ${({ theme }) => theme.secondaryColor};
  }
`;

interface Category {
  name: string;
  type: string;
  region: string;
  price: number;
}
const Users = () => {
    const [categoryData, setCategoryData] = useState<Category[]>([]);

    useEffect(() => {
        const fetchOrder = async () => {
          try {
            const response = await axios.get('http://localhost:4000/Category');
            console.log(response.data); // You can handle the order data as needed
            setCategoryData(response.data);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchOrder();
      }, []);
      
      if (categoryData.length === 0) {
        return <div>Loading order data...</div>;
      }
      const handleClick = () =>{
        alert("clicked")
      }

  return (
    <ThemeProvider theme={theme}>
      <PageHeaderComponent />
    <Content>
      <SidebarComponent/>
        <MainContentWrapper>
          <SearchComponent />
          <Banner />
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Region</th>
                <th>Price</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {categoryData.map((category) => (
                <tr key={category.name}>
                  <td>{category.name}</td>
                  <td>{category.type}</td>
                  <td>{category.region}</td>
                  <td>{category.price}</td>
                  <td><Button onClick={handleClick}>Edit</Button></td>
                </tr>
              ))}
            </tbody>
          </Table> 
        </MainContentWrapper>
    </Content>
      <Footer/>
    </ThemeProvider>
  );
};

export default Users;