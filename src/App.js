import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link ,Switch} from "react-router-dom";
import Home from './components/Home'
import Product from './components/Product'
import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
    <Switch>
      <Route component={Home} path='/' exact />
      <Route component={Product} path='/product/:slug' exact />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
