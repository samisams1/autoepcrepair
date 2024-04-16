import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SubMainWrapper = styled.div`
  display: flex;
  flex: 1;
  padding-top: 20px;
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

const TableContent = () => {
  return (
      <SubMainWrapper>
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
            <TableRow>
              <TableCell width="100px">
                <Link to="/item">Detail about this</Link>
                <p>This is some additional content.</p>
              </TableCell>
              <TableCell>Data 1</TableCell>
              <TableCell>Data 1</TableCell>
              <TableCell>Data 1</TableCell>
              <TableCell>Data 1</TableCell>
              <TableCell>Data 1</TableCell>
              <Action>
                <CartIcon className="fas fa-shopping-cart" /> Data 1
              </Action>
            </TableRow>
            {/* Add more rows here */}
            <TableRow>
              <TableCell>Data 10</TableCell>
              <TableCell>Data 10</TableCell>
              <TableCell>Data 10</TableCell>
              <TableCell>Data 10</TableCell>
              <TableCell>Data 10</TableCell>
              <TableCell>Data 10</TableCell>
              <Action>
                <CartIcon className="fas fa-shopping-cart" /> Data 10
              </Action>
            </TableRow>
          </tbody>
        </Table>
      </SubMainWrapper>
  );
};

const TableHeaderCell = styled.th``;

const TableRow = styled.tr``;

const TableCell = styled.td`
  width: ${(props) => props.width};
`;

export default TableContent;