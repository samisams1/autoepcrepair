import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Cabinet from '../../layouts/LeftSide/Cabinet';
import ImportantInfo from '../../layouts/LeftSide/importnamtInfo';
import { Subcategory } from './ProductPage';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Heading } from '../../layouts/common/common';



const SubMainWrapper = styled.div`
  display: flex;
  flex: 1;
  padding-top: 20px;
`;

const LeftColumn = styled.div`
  flex: 0.8;
  background-color: #ffffff;
  overflow-x: auto;

  background-color: #f2f2f2;
border: 2px solid #030E4F; /* Primary color */
margin-bottom: 16px;
`;

const RightColumn = styled.div`
  flex: 0.2;
`;
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
const Action = styled.td`
  color: green;
`;

const CartIcon = styled.i`
  color: green;
`;
interface  productProps {
    subcategoryNameUrl:string;
    category:string;
}
const Product: React.FC<productProps> = ({ subcategoryNameUrl,category }) => {
    const [subcategory, setSubcategory] = useState<Subcategory | null>(null);
    useEffect(() => {
        const fetchSubcategory = async () => {
          try {
            const response = await axios.get<Subcategory>(
              `http://localhost:4000/subCategory/${subcategoryNameUrl}`
            );
            setSubcategory(response.data);
          } catch (error) {
            console.error('Error fetching subcategory:', error);
          }
        };
    
        fetchSubcategory();
      }, [subcategoryNameUrl,category]);
    
      if (!subcategory) {
        return <div>Loading...</div>;
      }
  return (
    <SubMainWrapper>
      <LeftColumn>
      <Heading>Home/{category}/{subcategoryNameUrl}</Heading>
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
    <TableCell>{product.type}</TableCell>
    <TableCell>{product.language}</TableCell>
    <TableCell>{product.region}</TableCell>
    <TableCell>{product.date}</TableCell>
    <TableCell>{product.price}</TableCell>
    <TableCell>
      <Action>
        <CartIcon className="fas fa-shopping-cart" /> Data 1
      </Action>
    </TableCell>
  </TableRow>
))}
          </tbody>
        </Table>
      </LeftColumn>
      <RightColumn>
        <Cabinet/>
        <ImportantInfo/>
      </RightColumn>
    </SubMainWrapper>
  );
};
const TableHeaderCell = styled.th``;

const TableRow = styled.tr``;

const TableCell = styled.td`
  width: ${(props) => props.width};
`;
export default Product;