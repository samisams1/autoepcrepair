import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import { Product } from './ItemPage';
import CartContext from '../../redux/context/CartContext';
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
const ImageColumn = styled.div<{ isMaximized: boolean }>`
  flex: 1; /* Equal width */
  font-style: italic;
  color: #777;
  cursor: pointer;
  max-height: ${({ isMaximized }) => (isMaximized ? 'none' : '200px')};
  overflow: hidden;
  transition: max-height 0.3s ease;
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
interface ItemProps {
  product: Product;
}

const Item: React.FC<ItemProps> = ({ product }) => {
  const [isMaximized, setIsMaximized] = useState(false);
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
   // const imageUrl = 'http://localhost:4000/';
    const imageUrl='https://test2.nilesoftdemo.com/';

  const handleImageClick = () => {
    setIsMaximized(!isMaximized);
  };

  const handleAddToCart = () => {
 
    addToCart(product);
    navigate('/cart');
  };
  return (
    <WrapperItem>
      <Heading>Home/{product.name}</Heading>
      {product && (
        <div>
      <FirstRow>
        <FirstColumn>
       
            <div>
              <h3>{product.name}</h3>
              <p>{product.decription}</p>
            </div>
        </FirstColumn>
        <SecondColumn>
          <ImageColumn isMaximized={isMaximized} onClick={handleImageClick}>
            <Image src={`${imageUrl}${product.imageurl}`} alt={product.name}/>
          </ImageColumn>
          <Button onClick={handleAddToCart}>Buy</Button>
        </SecondColumn>
      </FirstRow>
      
      <SmallImage></SmallImage>
      </div>
      )}
    </WrapperItem>
  );
};

export default Item;