import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ProductList from './components/ProductList';
import AddProductForm from './components/AddProductForm';
import EditProductForm from './components/EditProductForm';
import PageNotFound from './components/PageNotFound';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Header/>
      <div className='container mt-3'>
        <Routes>
          <Route path={"/"} element={<Home/>}/>
          <Route path={"/products"} element={<ProductList/>}/>
          <Route path={"/products/add"} element={<AddProductForm/>}/>
          <Route path={"/products/edit/:id"} element={<EditProductForm/>}/>
          <Route path={"*"} element={<PageNotFound/>}/>
        </Routes>
      </div>
   </div>
  );
}

export default App;
