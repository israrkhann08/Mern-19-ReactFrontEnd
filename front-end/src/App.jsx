import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProductCard from "./components/ProductCard";
import Home from "./pages/Home";
import Products from "./pages/Products";

import ProductDetails from "./pages/ProductDetails";
import ErrorPage from "./pages/ErrorPage";
import UserAuth from "./pages/UserAuth";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import XYZ from "./components/Layout";
import PrivateRouter from "./components/PrivateRouter";

function App() {
  return (
    <>
     {/* layout set here in XYZ Component  */}
      <Routes>
        <Route 
        index 
        element={
          <XYZ>
             <Home />
          </XYZ>
        }
       />

          {/* Private Route setup */}
        <Route
          path="products"
          element={
            <PrivateRouter> 
                  <XYZ>
                     <Products />
                  </XYZ>  
            </PrivateRouter>
          }
        />

        <Route path="productsCard" element={<ProductCard />} />
        {/* <Route path="products" element={<Products />} /> */}
        <Route path="/product-details/:id?" element={<ProductDetails />} />

        {/* nested routes */}
        <Route path="user-auth">
          <Route
            index
            element={
              <h1 className="m-auto h-[120px] w-[200px] border-2 pt-[40px] text-justify">
                this is default run on bases of parent (default behavir of my
                parent behavior)
              </h1>
            }
          />
          <Route />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>

        {/* <Route path="/product-details/:id" element={<ProductDetails/>} /> */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      {/* <Home/> */}
      {/* <Products/> */}
      {/* <ProductCard/> */}
    </>
  );
}

export default App;
