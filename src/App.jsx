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

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route exact path="home" element={<Home/>}/>
                <Route exact path="admin" element={<AdminPart/>}/>
                <Route exact path="user" element={<UserPart/>}/>
                <Route exact path="profile" element={<Profile/>}/>
                <Route  path="*" element={<Home/>}/>
            </Routes>
        </div>
    );
}

export default App;
