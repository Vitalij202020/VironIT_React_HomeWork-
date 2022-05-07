import React from 'react';
import './Header.css'
import {connect} from "react-redux";
import {
    addNewsHandler,
    returnInitialView,
    reverseNews,
    setSearchInputValue,
    switchStart
} from "../../actions/newsActions";

const Header = ({start, clickReverseNews, clickInitialView, onClick, onChange, switchStart, createNewsFlag}) => {

    return (
        <div className="header">
            <div className="header__wrapper">
                <a href="" className="logo">Looking News</a>
                <div className="top">
                    {start
                        ?
                        <>
                            <button className='button' onClick={clickReverseNews}>Reverse News</button>
                            <button className='button' onClick={clickInitialView}>Initial View</button>
                            <input
                                type="text"
                                placeholder="Search News..."
                                onChange={onChange}
                            />
                        </>
                        :
                        <button className='button' onClick={switchStart}>Show News</button>
                    }
                </div>
                <div className="header-right">
                    <a className="active" href="#home">Home</a>
                    <a onClick={onClick} href="#addnews">{createNewsFlag ? "Hide Add News" : "Add News"}</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = ({news}) => ({
    start: news.start,
    createNewsFlag: news.createNewsFlag
});

const mapDispatchToProps = dispatch => ({
    clickReverseNews: () => dispatch(reverseNews()),
    clickInitialView: () => dispatch(returnInitialView()),
    onChange: (e) => dispatch(setSearchInputValue(e.target.value)),
    switchStart: () => dispatch(switchStart()),
    onClick: () => dispatch(addNewsHandler())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);