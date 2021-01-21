
import { HashRouter , Route, Link ,Switch} from "react-router-dom";
import Home from './components/Home'
// import Product from './components/Product'
import ProductDetails from './components/ProductDetails'

import Navbar from './components/Navbar'
import Footer from './components/footer'


function App() {

  console.log(process.env.PUBLIC_URL)
  return (
    <HashRouter basename={process.env.PUBLIC_URL} >
    <Navbar></Navbar>
    <Switch>
      <Route  exact component={ProductDetails} path='/product/:slug' />
      <Route  exact component={Home} path='/'  />
    </Switch>
    <Footer></Footer>
    </HashRouter >
  );
}

export default App;
