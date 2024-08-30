import React from 'react'
import Layout from '../../Components/Layout/Layout'
import AdminMenu from '../../Components/Layout/AdminMenu'

const User = () => {
  return (
    <Layout title={'User - agriculture app'}>
        <div className='row'>
            <div className="col-md-3">
                    <AdminMenu />
            </div>
            <div className='col-md-9'>
      <h1>user</h1>

            </div>

        </div>
      
    </Layout>
  )
}

export default User
