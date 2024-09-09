import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProductCard from "./components/ProductCard";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import ProductDetails from "./pages/ProductDetails";
import ErrorPage from "./pages/ErrorPage";
import UserAuth from "./pages/UserAuth";
import Login from "./pages/Login";
import Signup from "./pages/Signup";


function App() {


  return (
    <>
    <Navbar/>
     <Routes>
          <Route index path="/" element={<Home/>} />
          <Route path="products" element={<Products/>} />
          <Route path="/product-details/:id" element={<ProductDetails/>} />

             {/* nested routes */}
          <Route path="user-auth" element={<UserAuth/>}>
              <Route index element={ <h1>this is default run on bases of parent (default behavir of my parent behavior)</h1> } /><Route/>
             <Route path="login" element={<Login/>} />
             <Route path="signup" element={<Signup/>} />
          </Route>


          {/* <Route path="/product-details/:id" element={<ProductDetails/>} /> */}
          <Route path="*" element={<ErrorPage/>} />
     </Routes>
 



    {/* <Home/> */}
    {/* <Products/> */}
    {/* <ProductCard/> */}
    </>
  );
}

export default App;
