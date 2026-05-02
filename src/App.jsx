import { Route, Routes } from "react-router-dom";
import "./App.css";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Footer from "./components/Includes/Footer";
import Navbar from "./components/Includes/Header";
import { Toaster } from "react-hot-toast";
import Products from "./pages/Products";
import ProfilePage from "./pages/ProfilePage";
import GoogleLoginComponent from "./components/Auth/GoogleLoginComponent";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import ViewCart from "./components/Products/ViewCart";
import CheckOut from "./components/Products/CheckOut";
import Billing from "./components/Account/Billing";
// import AccountInfo from './components/Account/AccountInfo';
import OrderHistoryPage from "./components/Account/OrderHistory";
import GetIdeasInteriorDesign from "./pages/GetIdeasInteriorDesign";
import FindProfessionals from "./pages/FindProfessionals";
import ProfessionalRegistration from "./pages/ProfessionalRegistration";
import ProductDetails from "./components/Products/ProductDetails";
import ProductsList from "./components/Products/ProductsList";

export default function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="get-ideas" element={<GetIdeasInteriorDesign />} />
          <Route path="find-professionals" element={<FindProfessionals />} />
          <Route path="for-pros" element={<ProfessionalRegistration />} />
          <Route path="contact" element={<Contact />} />
          <Route path="view-cart" element={<ViewCart />} />
          <Route path="check-out" element={<CheckOut />} />
          <Route path="billing" element={<Billing />} />
          <Route path="order-history" element={<OrderHistoryPage />} />
          <Route path="shop-products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/category/:categorySlug" element={<ProductsList />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="google-login" element={<GoogleLoginComponent />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>

      <Footer />
    </>
  );
}
