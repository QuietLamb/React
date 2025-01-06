import './App.css';
import Index from './pages/index.jsx';
import About from './pages/about.jsx';
import Blog_Details from './pages/blog-details';
import Blog from './pages/blog';
import Checkout from './pages/checkout';
import Contact from './pages/contact';
import Shop_Details from './pages/shop-details';
import Shop from './pages/shop.jsx';
import Shopping_Cart from './pages/shopping-cart';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route Path='/' element={<Navigate to="/index"/>}></Route>
        <Route path='/index' element={<Index/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/blog-details' element={<Blog_Details/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/shop-details' element={<Shop_Details/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/shopping-cart' element={<Shopping_Cart/>}/>
      </Routes>
    </Router>
  );
};

export default App;
