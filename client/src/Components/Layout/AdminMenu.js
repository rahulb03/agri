import React from "react";
import { NavLink } from "react-router-dom";
import "./a.css";

const AdminMenu = () => {
  return (
    <div className="container text-center mt-4">
      <div className="list-group dashboard-menu" >
        <div >
        <h4 className="list-group-item bg-primary text-white">Admin Panel</h4>

        <div className="r" style={{border:'1px solid black'}}>
          <NavLink  style={{border:'1px solid black'}}
            to="/dashboard/admin/create-category"
            className="list-group-item list-group-item-action"
          >
            Create Category
          </NavLink >
          <NavLink  style={{border:'1px solid black'}}
            to="/dashboard/admin/create-product"
            className="list-group-item list-group-item-action"
          >
            Create Product
          </NavLink>
          <NavLink  style={{border:'1px solid black'}}
            to="/dashboard/admin/products"
            className="list-group-item list-group-item-action"
          >
            Products
          </NavLink>
          <NavLink  style={{border:'1px solid black'}}
            to="/dashboard/admin/orders"
            className="list-group-item list-group-item-action"
          >
            Orders
          </NavLink>
          {/* <NavLink
            to="/dashboard/admin/users"
            className="list-group-item list-group-item-action"
          >
            Users
          </NavLink> */}
        </div>
        </div>
      </div>
    </div>
  );
};

export default AdminMenu;
