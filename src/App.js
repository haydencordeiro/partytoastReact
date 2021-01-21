import logo from './logo.svg';

import { BrowserRouter, Route, Link ,Switch} from "react-router-dom";
import Home from './components/Home'
// import Product from './components/Product'
import ProductDetails from './components/ProductDetails'

import Navbar from './components/Navbar'
import Footer from './components/footer'


function App() {


  return (
    <BrowserRouter>
    <Navbar></Navbar>
    <Switch>
      <Route component={Home} path='/' exact />
      <Route component={ProductDetails} path='/product/:slug' exact />
    </Switch>
    <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
