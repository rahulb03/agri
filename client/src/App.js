import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import About from "./Pages/About";
import Register from "./Pages/Auth/Register";
import Login from './Pages/Auth/Login';
import Contact from "./Pages/ContactS";
import Policy from "./Pages/Policy";
import Dashboard from "./Pages/Dashboard";
import PrivateRoute from "./Components/Routes/Private";
import ForgotPasssword from "./Pages/Auth/ForgotPassword";
import 'react-toastify/dist/ReactToastify.css';
import Pagenotfound from "./Pages/Pagenotfound";
import AdminRoute from "./Components/Routes/AdminRoute";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import CreateCategory from "./Pages/Admin/CreateCategory";
import CreateProduct from "./Pages/Admin/CreateProduct";
import User from "./Pages/Admin/User";
import Order from "./Pages/Order";
import Profile from "./Pages/Profile";
import Products from "./Pages/Admin/Product";
import UpdateProduct from "./Pages/Admin/UpdateProduct";
import Search from "./Pages/search";
import ProductDetails from "./Pages/ProductDetails";
import Categories from "./Pages/Categories";
import CategoryProduct from './Pages/CategoryProduct';
import CartPage from "./Pages/CartPage";

function App() {
  return (
    <>
  
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:slug" element={<ProductDetails /> } />
        <Route path="/categories" element={<Categories />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/category/:slug" element={<CategoryProduct/>} />
        <Route path="/search" element={<Search /> } />
        <Route path="/dashboard" element={<PrivateRoute />} >
          <Route path="user" element =  {<Dashboard />} />
          <Route path="user/orders" element =  {<Order />} />
          <Route path="user/profile" element =  {<Profile />} />


        </Route>

        <Route path="/dashboard" element={<AdminRoute />}>
         <Route path="admin" element =  {<AdminDashboard />} />
         <Route path="admin/create-category" element =  {<CreateCategory />} />
         <Route path="admin/create-product" element =  {<CreateProduct />} />
         <Route path="admin/product/:slug" element={<UpdateProduct />} />
          <Route path="admin/products" element={<Products />} />
         <Route path="admin/products" element =  {<Products />} />
         <Route path="admin/user" element =  {<User />} />

          
        </Route>
       
        <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPasssword />} />

        <Route path="/login" element={<Login />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="*" element={<Pagenotfound />} />
        
      </Routes>

      
    </>
  );
}

export default App;