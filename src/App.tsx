import { BrowserRouter,Routes,Route } from "react-router-dom";
import UserLayout from "./Components/Layout/UserLayout";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Profile from "./Pages/Profile";
import CollectionPage from "./Pages/CollectionPage";
import ProductDetails from "./Components/Product/ProductDetails";
import Checkout from "./Components/Cart/Checkout";
import OrderConfirmationPage from "./Components/Cart/OrderConfirmationPage";
import OrderDetails from "./Pages/OrderDetails";
import MyOrdersPage from "./Pages/MyOrdersPage";
import AdminLayout from "./Components/Admin/AdminLayout";
import AdminHomePage from "./Pages/AdminHomePage";



function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserLayout/>}>
          {/** User Layout */}
            <Route index element={<Home/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="register" element={<Register/>}/>
            <Route path="profile" element={<Profile/>}/>
            <Route path="collections/:collection" element={<CollectionPage/>}/>
            <Route path="product/:id" element={<ProductDetails/>}/>
            <Route path="checkout" element={<Checkout/>}/>
            <Route path="order-confirmation" element={<OrderConfirmationPage/>}/>
            <Route path="/order/:id" element={<OrderDetails/>}/>
            <Route path="my-orders" element={<MyOrdersPage/>}/>

          
          </Route>
          <Route path="/admin" element={<AdminLayout/>}>{
                /** Admin Layout */
                <Route index element={<AdminHomePage/>}/>
          }</Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
