import React from 'react';
import styled from 'styled-components';
import Cabinet from '../../layouts/LeftSide/Cabinet';
import ImportantInfo from '../../layouts/LeftSide/importnamtInfo';
import TableContent from '../../layouts/LeftSide/MainContent';



const SubMainWrapper = styled.div`
  display: flex;
  flex: 1;
  padding-top: 20px;
`;

const Title = styled.div`
  color: red;
`;

const LeftColumn = styled.div`
  flex: 0.8;
  background-color: #ffffff;
  overflow-x: auto;
`;

const RightColumn = styled.div`
  flex: 0.2;
`;

const SubMain = () => {
  return (
    <SubMainWrapper>
      <LeftColumn>
      <Title>Samismas</Title>
      <TableContent/>
      </LeftColumn>
      <RightColumn>
        <Cabinet/>
        <ImportantInfo/>
      </RightColumn>
    </SubMainWrapper>
  );
};

export default SubMain;