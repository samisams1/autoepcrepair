import React from 'react';
import Button from '../../components/Button/Button';

const Order = () => {
  const  handleClick = ()=>{
        alert("samisams")
    }
  
  return (
    <div>
      <h2>My Order</h2>
      <div>
        <button>Product Title</button>
        <span>$59</span>
        <input type="number" value={5} />
        <span>$295</span>
        <button>
          <i className="close-icon"></i>
        </button>
      </div>
      <div>
        <button>Product Title</button>
        <span>$59</span>
        <input type="number" value={5} />
        <span>$295</span>
        <button>
          <i className="close-icon"></i>
        </button>
      </div>
      <div>
        <p>Shipment: free (no extra charge)</p>
        <p>Total: US $Total</p>
      </div>
      <Button onClick={handleClick}>Cotinue Shopping </Button>
    </div>
  );
};

export default Order;