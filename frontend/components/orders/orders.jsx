import React, { Component } from 'react';
import Order from './order';

export class Orders extends Component {
  constructor(props) {
    super(props);
    
  }

  componentDidMount() {
    this.props.getOrders(this.props.currentUser.id);
  }
  
  
  render() {
    if (!this.props.orders) return null;
    return (
      <div className='orders-container'>
        <div className='main-content-container'>
          <h1>Order History</h1>
          <div className='order-items-container'>
            <h3>
              <span className='order-number'>Order Number</span>
              <span className='date'>Date</span>
              <span className='amount'>Amount</span>
              <span className='tracking-number'>Tracking Number</span>
            </h3>

            {
              Object.values(this.props.orders).map( (order, i) => {
                return <Order order={order} key={i} />
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Orders;
