import React, { useState } from 'react';
import styled from 'styled-components';

const PageHeader = styled.div`
  background-color: ${(props) => props.theme.primaryColor};
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer; /* Added cursor pointer */

  span {
    color: #fff;
    margin-left: auto;
  }
`;

const HamburgerMenu = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 16px;
    left: 16px;
    z-index: 9999;
  }

  span {
    display: block;
    width: 24px;
    height: 2px;
    background-color: #fff;
    margin-bottom: 4px;
    transition: transform 0.3s ease-in-out;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const DrawerContent = styled.div`
  p {
    padding: 8px 0;
    margin: 0;
    color: #fff;
    cursor: pointer;
    border-bottom: 1px solid #ccc;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: #f2f2f2;
      color: ${props => props.theme.secondaryColor};
    }
  }
`;

const Drawer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 100%;
  padding-top: 40px; /* Added padding-top */
  background-color: #030E4F; /* Updated background color */
  transform: ${(props) => (props.isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in-out;
`;


interface PageHeaderComponentProps {}

export const PageHeaderComponent: React.FC<PageHeaderComponentProps> = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };



  return (
    <>
      <PageHeader onClick={toggleDrawer}>
        <span>PageHeader</span>
        <HamburgerMenu>
          <span></span>
          <span></span>
          <span></span>
        </HamburgerMenu>
      </PageHeader>
      <Drawer isOpen={isDrawerOpen}>
            <DrawerContent>
              <p>User Profile</p>
              <p>Cart Summary</p>
              <p>Recently Viewed Products</p>
              <p>Saved Items</p>
              <p>Order History</p>
              <p>Notifications</p>
              <p>Account Settings</p>
              <p>Help and Support</p>
              <p>Language and Currency Selection</p>
              <p>Social Media Links</p>
            </DrawerContent>
          </Drawer>
    </>
  );
};