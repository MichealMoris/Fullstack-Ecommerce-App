import Navbar from './components/HomePage/Navbar'
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Cart from './components/Cart/Cart';
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={Home()} />
        <Route path='/account'>
          <Route path='login' element={Login()}/>
          <Route path='register' element={Register()}/>
        </Route>
        <Route path='/cart' element={Cart()} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
