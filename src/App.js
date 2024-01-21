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
<<<<<<< HEAD
import NoFavorite from './components/Favorite/NoFavorite'
import FavoriteCard from './components/Favorite/FavoriteCard'
=======
import { useState } from 'react';
>>>>>>> 739333ae62389a356501e7bd4bededc028b88acf
function App() {
  const [refreshedData, setRefreshedData] = useState(false);

  const handleRefresh = () => {
    setRefreshedData(true);
  };
  return (
    <div className="container-fluid app-container">
      <Navbar data={refreshedData} setRefreshedData={() => {setRefreshedData(false)}}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/account'>
          <Route path='login' element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
        </Route>
<<<<<<< HEAD
        <Route path='/cart' element={<Cart/>} />
        <Route path='/favorites' element={<FavoriteCard/>} />
=======
        <Route path='/cart' element={<Cart onRefresh={handleRefresh}/>} />
>>>>>>> 739333ae62389a356501e7bd4bededc028b88acf
        <Route path='/allproducts' element={<AllProducts />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<ContactData />} />
        <Route path='/productDetails/:id' element={<ProductDetails onRefresh={handleRefresh}/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
