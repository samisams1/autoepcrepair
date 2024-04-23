import React, {useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
//import CartContext from '../../redux/context/CartContext';
import api from '../../api';

const WrapperItem = styled.div`
  background-color: #f2f2f2;
  border: 2px solid #030E4F; /* Primary color */
  margin-bottom: 16px;
  margin-top: 16px;
`;

const Heading = styled.div`
  background-color: #030E4F;
  color: #fff;
`;

const FirstRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start; /* Start from top */
  margin-bottom: 8px;
`;

const FirstColumn = styled.div`
  flex: 1; /* Equal width */
  font-weight: bold;
  color: #333;
`;
const SmallImage = styled.img`
  width: 300px;
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
export interface Subcategory {
  id: number;
  name: string;
  categoryId: number;
  createdAt: string;
  updatedAt: string;
  products: ProductInterface[];
}

interface ProductInterface {
  id:number;
  name:string;
  type: string | null;
  language: string | null;
  region: string | null;
  date: string | null;
  price: number | null;
  subcategoryId: number;
  createdAt: string;
  updatedAt: string;
}
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ccc;
    white-space: nowrap;
  }

  @media (max-width: 768px) {
    display: block;

    tbody {
      display: block;
    }

    tr {
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;
    }

    td {
      display: flex;
      flex-direction: column;
      text-align: left;
    }

    th {
      display: none;
    }
  }
`;
const SubMenuDetail = () => {
  //const { addToCart } = useContext(CartContext);


  const [subcategory, setSubcategory] = useState<Subcategory | null>(null);

  useEffect(() => {
    const fetchSubcategory = async () => {
      try {
        const response = await api.get<Subcategory>(
          '/subCategory/subcategory1'
        );
        setSubcategory(response.data);
      } catch (error) {
        console.error('Error fetching subcategory:', error);
      }
    };

    fetchSubcategory();
  }, []);
  return (
    <WrapperItem>
      <Heading>Home/{"autoepcrepair"}</Heading>
      {subcategory && (
        <div>
          <FirstRow>
            <FirstColumn>
      <Table>
          <thead>
            <tr>
              <TableHeaderCell>Name</TableHeaderCell>
              <TableHeaderCell>Type</TableHeaderCell>
              <TableHeaderCell>Language</TableHeaderCell>
              <TableHeaderCell>Region</TableHeaderCell>
              <TableHeaderCell>Date</TableHeaderCell>
              <TableHeaderCell>Price, USD</TableHeaderCell>
              <TableHeaderCell>Action</TableHeaderCell>
            </tr>
          </thead>
          <tbody>
          {subcategory.products.map((product) => (
  <TableRow>
    <TableCell width="100px">
      <Link to={`/productDetail/${product.id}`} state={product}>{product.name}</Link>
    </TableCell>
    <TableCell>{product.name}</TableCell>
    <TableCell>{product.type}</TableCell>
    <TableCell>{product.language}</TableCell>
    <TableCell>{product.region}</TableCell>
    <TableCell>{product.date}</TableCell>
    <TableCell>{product.price}</TableCell>
    <TableCell>
      <p>Cart</p>
    </TableCell>
  </TableRow>
))}
          </tbody>
        </Table>
            </FirstColumn>
          </FirstRow>
          <SmallImage />
        </div>
      )}
    </WrapperItem>
  );
};
const TableHeaderCell = styled.th``;
const TableRow = styled.tr``;
const TableCell = styled.td`
width: ${(props) => props.width};
`;
export default SubMenuDetail;