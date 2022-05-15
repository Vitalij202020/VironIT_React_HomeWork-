import './App.css';
import Header from "./components/Header";
import React, {useEffect} from 'react';
import {Route, Routes} from "react-router";
import Home from "./pages/Home";
import AdminPart from "./pages/AdminPart";
import UserPart from "./pages/UserPart";
import Profile from "./pages/Profile";
import {fetchProducts} from "./services/productService";
import {useDispatch} from "react-redux";
import PrivateRoute from "./hoc/PrivateRoute";

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="home" element={<Home/>}/>
                <Route path="admin" element={<PrivateRoute component={AdminPart}/>}/>
                <Route path="user" element={<PrivateRoute component={UserPart}/>}/>
                <Route path="profile" element={<PrivateRoute component={Profile}/>}/>
                <Route  path="*" element={<Home/>}/>
            </Routes>
        </div>
    );
}

export default App;
