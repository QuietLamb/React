import './App.css';
import Index from './pages';
import About from './pages/about';
import Blog_Details from './pages/blog-details';
import Blog from './pages/blog';
import Checkout from './pages/checkout';
import Contact from './pages/contact';
import Shop_Details from './pages/shop-details';
import Shop from './pages/shop';
import Shopping_Cart from './pages/shopping-cart';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path='/index.html' element={<Index/>}/>
            <Route path='/about.html' element={<About/>}/>
            <Route path='/blog-details.html' element={<Blog_Details/>}/>
            <Route path='/blog.html' element={<Blog/>}/>
            <Route path='/checkout.html' element={<Checkout/>}/>
            <Route path='/contact.html' element={<Contact/>}/>
            <Route path='/shop-details.html' element={<Shop_Details/>}/>
            <Route path='/shop.html' element={<Shop/>}/>
            <Route path='/shopping-cart.html' element={<Shopping_Cart/>}/>
          </Routes>
        </Router>

        <Index/>
        <About/>
        <Blog_Details/>
        <Blog/>
        <Checkout/>
        <Contact/>
        <Shop_Details/>
        <Shop/>
        <Shopping_Cart/>
    </div>
  );
}

export default App;
