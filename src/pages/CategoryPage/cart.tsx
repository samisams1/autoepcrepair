import React, { useContext, ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import CartContext, { CartContextProps } from '../../redux/context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import api from '../../api';
interface OrderData {
  productId: string;
  price: number;
  quantity: number;
  status: string;
}

const CartPage: React.FC = () => {
  const { cartItems, removeFromCart, setCartItems } = useContext<CartContextProps>(CartContext);
  const [orderSuccess, setOrderSuccess] = useState(false); // State variable for order success
  const navigate = useNavigate();
  const handleOrder = async () => {
    try {
      const orderData: OrderData[] = cartItems.map((item) => ({
        productId: item.id,
        price: item.price,
        quantity: item.quantity,
        status: 'pending'
      }));
     
      console.log(orderData);
      const response = await api.post('/orders/createOrder', orderData);
      console.log(response.data); // You can handle the response as needed
      setOrderSuccess(true); // Set order success state to true
      setCartItems([]); // Clear the cart items
      navigate(`/order/${response.data.id}`);
    } catch (error) {
      console.error(error);
    }
  };

  const handleRemoveFromCart = (productId: string) => {
    removeFromCart(productId);
  };

  const handleChangeQuantity = (event: ChangeEvent<HTMLInputElement>, productId: string) => {
    const newQuantity = parseInt(event.target.value, 10);
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };
  //const imageUrl = 'http://localhost:4000/';
  const imageUrl = 'https://test2.nilesoftdemo.com/'

  
  return (
    <CartContainer>
      <CartTitle>Your Cart</CartTitle>
      {cartItems.map((item) => (
        <CartItem key={item.id}>
          <ItemRow>
            
            <ItemImage src = {`${imageUrl}${item.imageurl}`} alt={item.name} />
            <ItemDetails>
             <Link to={`/productDetail/${item.id}`} state={item}>{item.name}</Link>
              <PriceQuantityContainer>
                <ItemPrice>${item.price}</ItemPrice>
                <QuantityContainer>
                  <QuantityLabel>Quantity:</QuantityLabel>
                  <QuantityInput
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(event) => handleChangeQuantity(event, item.id)}
                  />
                </QuantityContainer>
                <Subtotal>Subtotal: ${item.price * item.quantity}</Subtotal>
              </PriceQuantityContainer>
            </ItemDetails>
            <RemoveButton onClick={() => handleRemoveFromCart(item.id)}>
              <CloseIcon />
            </RemoveButton>
          </ItemRow>
        </CartItem>
      ))}
      <Button onClick={handleOrder}>Order</Button>
      {orderSuccess && <SuccessMessage>Your order has been successfully created!</SuccessMessage>}
    </CartContainer>
  );
};
const SuccessMessage = styled.p`
  background-color: #dff0d8;
  color: #3c763d;
  border: 1px solid #d6e9c6;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 10px;
`;
const CartContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const CartTitle = styled.h2`
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 10px;
  }
`;

const CartItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  padding: 10px;

  @media (max-width: 768px) {
    padding: 5px;
  }
`;

const ItemRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ItemImage = styled.img`
  width: 50px;
  height: auto;
  margin-right: 20px;

  @media (max-width: 768px) {
    width: 80px;
    margin-right: 10px;
  }
`;

const ItemDetails = styled.div`
  flex-grow: 1;
`;

const PriceQuantityContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ItemPrice = styled.p`
  margin-bottom: 5px;
  margin-right: 10px;

  @media (max-width: 768px) {
    margin-bottom: 2px;
    font-size: 14px;
  }
`;

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 5px;
  }
`;

const QuantityLabel = styled.span`
  margin-right: 5px;
`;

const QuantityInput = styled.input`
  width: 50px;
  padding: 5px;
  margin-right: 5px;
`;

const Subtotal = styled.p`
  margin-top: 10px;
  margin-right: 10px;
`;

const RemoveButton = styled.button`
// Styles for the remove button
  background: none;
  border: none;
  cursor: pointer;
color : red;
  @media (max-width: 768px) {
    margin-top: 5px;
    margin-right: 0;
  }
`;

const CloseIcon = styled(AiOutlineClose)`
  font-size: 20px;
`;

export default CartPage;