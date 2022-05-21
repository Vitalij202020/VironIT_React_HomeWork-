import React, {useEffect} from 'react';
import './App.css';
import {Route, Routes} from "react-router";
import Header from "./components/Header";
import Home from "./pages/Home";
import AdminPart from "./pages/AdminPart";
import PrivateRoute from "./hoc/PrivateRoute";
import {useDispatch} from "react-redux";
import {fetchProducts} from "./services/productService";
import UserPart from "./pages/UserPart";
import Profile from "./pages/Profile";
import CartPage from "./pages/CartPage";

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts() as any)
    }, [])

  return (
      <div className="App">
          <Header/>
          <Routes>
              <Route path="home" element={<Home/>}/>
              <Route path="admin" element={<PrivateRoute roles={['admin']} component={AdminPart}/>}/>
              <Route path="user" element={<PrivateRoute roles={['user', 'admin']} component={UserPart}/>}/>
              <Route path="profile" element={<PrivateRoute roles={['user', 'admin']} component={Profile}/>}/>
              <Route path="cart" element={<PrivateRoute roles={['user']} component={CartPage}/>}/>
              <Route path="*" element={<Home/>}/>
          </Routes>
      </div>
  );
}

export default App;
