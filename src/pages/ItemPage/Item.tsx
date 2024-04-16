import React, { useState } from 'react';
import styled from 'styled-components';
import HesstonImage from '../../assets/screen/hesston-epsilon.png';
import { ItemPageProps } from './ItemPage';

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

const SecondColumn = styled.div`
  flex: 1; /* Equal width */
  display: flex;
  flex-direction: column;
`;

const CatalogTypeContainer = styled.div`
  border: 2px solid #fff;
  padding: 8px;
  margin-top: 8px;
  background-color: #fff;
`;

const CatalogType = styled.p`
  margin: 5px;
  color: #333;
  padding : 5px;
   background-color: #f2f2f2;
`;

const ImageColumn = styled.div<{ isMaximized: boolean }>`
  flex: 1; /* Equal width */
  font-style: italic;
  color: #777;
  cursor: pointer;
  max-height: ${({ isMaximized }) => (isMaximized ? 'none' : '200px')};
  overflow: hidden;
  transition: max-height 0.3s ease;
`;

const ImageSlideShow = styled.div`
  /* Styles for the image slideshow container if needed */
`;

const Image = styled.img`
  width: 100%;
`;

const SmallImage = styled.img`
  width: 300px;
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;


  const Item: React.FC<ItemPageProps> = ({ categoryId }) => {
  const [isMaximized, setIsMaximized] = useState(false);

  const handleImageClick = () => {
    setIsMaximized(!isMaximized);
  };

  return (
    <WrapperItem>
      <Heading>Home / Heavy Technics + Repair / Hesston Parts & Workshop Manuals by Massey Ferguson | AGCO 01/2020</Heading>
      <FirstRow>
        <FirstColumn>
          {/* Content of the first column */}
          {categoryId}
        </FirstColumn>
        <SecondColumn>
          <ImageColumn isMaximized={isMaximized} onClick={handleImageClick}>
            <Image src={HesstonImage} alt="sams" />
          </ImageColumn>
          <CatalogTypeContainer>
            <CatalogType>Type of catalogue: spare parts catalog</CatalogType>
            <CatalogType>Type of catalogue: spare parts catalog</CatalogType>
            <CatalogType>Type of catalogue: spare parts catalog</CatalogType>
            <CatalogType>Like  dis like</CatalogType>
          </CatalogTypeContainer>
        </SecondColumn>
      </FirstRow>
      <ImageSlideShow>
        {/* Image slideshow content */}
        <SmallImage src={HesstonImage} alt="sams" />
      </ImageSlideShow>
    </WrapperItem>
  );
};

export default Item;