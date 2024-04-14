import { BrowserRouter, Routes, Route } from "react-router-dom";
import SigIn from "./components/views/signIn";
import Home from "./components/views/home";
import Header from "./components/widgets/header";
import SignUp from "./components/views/signUp";
import RestePassword from "./components/views/resetPassword";
import CheckEmail from "./components/views/checkEmail";
import Verification from "./components/views/verification";
import CreatePassword from "./components/views/createPassword";
import Footer from "./components/widgets/footer";
import ProductList from "./components/views/productList";
import CartPage from "./components/views/cartPage";
import Checkout from "./components/views/checkout";
import ProductDetails from "./components/views/productDetails";
import Contact from "./components/views/Contact";
import Address from "./components/views/address";
import Confirm from "./components/views/confirm";

function App() {

  const endpoint = window.location.pathname;

  return (
    <BrowserRouter>
    <div className=" app">
      <div className="header"><Header /></div>
      <div className="body">
         <div className="activity-pages">
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/women" element={<ProductList />}/>
              <Route path="/add-to-cart" element={<CartPage />}/>
              <Route path="checkout" element = {<Checkout />} />
              <Route path ="/product-details" element={<ProductDetails />} />
              <Route path ="/personal-info" element={<Contact />} />
              <Route path = "/add-address" element={<Address />} />
              <Route path = "/confirm" element={<Confirm />} />
            </Routes>
         </div>

         <div className="auth">
           <Routes>
              <Route path="/sign-in" element ={<SigIn />} />
              <Route path="/sign-up" element ={<SignUp />} />
              <Route path="/reset-password" element ={<RestePassword />} />
              <Route path="/check-email" element ={<CheckEmail />} />
              <Route path="/verification" element ={<Verification />} />
              <Route path="/create-password" element ={<CreatePassword />} />
           </Routes>
         </div>
      </div>
      <div className={
        endpoint === "/sign-in" ||
        endpoint === "/sign-up" ||
        endpoint === "/reset-password" ||
        endpoint === "/check-email" ||
        endpoint === "/verification" ||
        endpoint === "/create-password" ? "d-none" : "footer" }>
        <Footer />
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
