import Navbar from './components/HomePage/Navbar'
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Cart from './components/Cart/Cart';
import AllProducts from './components/Product/AllProducts';
import About from './components/About/About';
import ContactData from './components/Contact/ContactData';
import ProductDetails from './components/ProductDetails/ProductDetails';
function App() {
  return (
    <div className="container-fluid app-container">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/account'>
          <Route path='login' element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/allproducts' element={<AllProducts />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<ContactData />} />
        <Route path='/productDetails/:id' element={<ProductDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
