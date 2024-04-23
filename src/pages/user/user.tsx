import React, { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { PageHeaderComponent } from '../../layouts/PageHeader';
import SidebarComponent from '../../layouts/Sidebar';
import SearchComponent from '../../layouts/Search/Search';
import Banner from '../HomePage/Banner';
import Footer from '../../layouts/Footer/footer';
import Button from '../../components/Button/Button';
import api from '../../api';
import Spinner from '../../components/spinner';
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

export interface User {
  id:number;
  fullName: string;
  email: string;
}
const Users = () => {
    const [userData, setUserData] = useState<User[]>([]);

    useEffect(() => {
        const fetchOrder = async () => {
          try {
            const response = await api.get('/users');
            console.log(response.data); // You can handle the order data as needed
            setUserData(response.data);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchOrder();
      }, []);
      
      if (userData.length === 0) {
        return <div><Spinner/></div>;
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
                <th>Ful NAme</th>
                <th>Email</th>
                <th>status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((user) => (
                <tr key={user.id}>
                  <td>{user.fullName}</td>
                  <td>{user.email}</td>
                  <td>Active</td>
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