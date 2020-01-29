import React, { useState } from 'react';

function Order(props) {
  
  if (!props.order || !props.order.total) return null;

  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  let d = new Date(props.order.date);
  const month = monthNames[d.getMonth()],
    day = d.getDate(),
    year = d.getFullYear();

  const orderNumber = props.order.order_number,
    date = `${month} ${day}, ${year}`,
    amount = props.order.total,
    trackingNumber = props.order.tracking_number;

  return (
    <div className='order-container'>
      <span className='order-number'>{orderNumber}</span>
      <span className='date'>{date}</span>
      <span className='amount'>${amount.toFixed(2)}</span>
      <span className='tracking-number'>{trackingNumber}</span>
    </div>
  );
}

export default Order;