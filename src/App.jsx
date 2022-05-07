import React from 'react';
import './App.css';
import NewsItemsList from "./components/NewsItemsList/NewsItemsList";
import Header from "./components/Header/Header";
import CreateNews from "./components/CreateNews/CreateNews";
import {connect} from "react-redux";

function App({start, createNewsFlag}) {
    return (
        <div className="App">
            <Header/>
            {createNewsFlag && <CreateNews/>}
            {start && <NewsItemsList/>}
        </div>
    )
}

const mapStateToProps = ({news}) => ({
    start: news.start,
    createNewsFlag: news.createNewsFlag
});


export default connect(mapStateToProps)(App);
