import React from 'react';
import './Header.css'

const Header = ({start, reverseNews, returnInitialView, searchInput, inputHandler, setSearchInput, switchStart, addNewsHandler, createNews}) => {
    return (
        <div className="header">
            <div className="header__wrapper">
                <a href="" className="logo">Looking News</a>
                <div className="top">
                    {start
                        ?
                        <>
                            <button className='button' onClick={reverseNews}>Reverse News</button>
                            <button className='button' onClick={returnInitialView}>Initial View</button>
                            <input
                                type="text"
                                value={searchInput}
                                onChange={(e) => inputHandler(e)}
                                onClick={() => setSearchInput("")}
                            />
                        </>
                        :
                        <button className='button' onClick={switchStart}>Show News</button>
                    }
                </div>
                <div className="header-right">
                    <a className="active" href="#home">Home</a>
                    <a onClick={(e)=> addNewsHandler(e)} href="#addnews">{createNews ? "Hide Add News" : "Add News"}</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </div>
    );
};

export default Header;