import React from 'react';
import Layout from '../Components/Layout/Layout';
import UserMenu from '../Components/Layout/UserMenu';

const Order = () => {
  return (
    <Layout title={'Order - agriculture app'}>  
      <div className='container-fluid p-3 m-3'>
        <div className="row">
            <div className='col-md-3'>
                    <UserMenu />
            </div>
            <div className="col-md-9">
                <h1>all orders</h1>
            </div>
        </div>
      </div>
    </Layout>
  )
}

export default Order
