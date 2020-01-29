import React, { useState, useEffect } from 'react';
import Order from './order';
import { useLastLocation } from 'react-router-last-location';

const Orders = (props) => {
  if (!props.orders) return null;

  const [hasOrders, setOrders] = useState(false);
  const lastLocation = useLastLocation();
  const message = document.querySelector('.message');
  const newOrder = document.querySelector('.order-container');

  const handleNewOrder = () => {
    debugger
    message.innerHTML = 'Thank you for your order!';
    newOrder.style.backgroundColor = '#F5E3E7';

    // window.setTimeout(() => {
    //   newOrder.style.backgroundColor = 'white';
    //   newOrder.style.color = 'black';
    // }, 3000);
  };

  useEffect(() => {
    if (!hasOrders) {
      props.getOrders(props.currentUser.id);
      setOrders(true);
    }

    if (lastLocation 
      && message
      && lastLocation.pathname === '/checkout'
      && message.innerHTML === ''
      ) {
      handleNewOrder();
    }
  }, [props.orders]);

  return (
    <div className='orders-container'>
      <div className='main-content-container'>
        <h1>Order History</h1>
        <p className='message'></p>
        <div className='order-items-container'>
          <h3>
            <span className='order-number'>Order Number</span>
            <span className='date'>Date</span>
            <span className='amount'>Amount</span>
            <span className='tracking-number'>Tracking Number</span>
          </h3>

          {
            Object.values(props.orders).reverse().map((order, i) => {
              return <Order order={order} key={i} />
            })
          }
        </div>
      </div>
    </div>
  );
}

export default Orders;
