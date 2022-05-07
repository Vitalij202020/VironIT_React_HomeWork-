import React from 'react';
import NewsItem from "../NewsItem/NewsItem";
import './NewsItemsList.css'
import {connect} from "react-redux";
import {moreInfoHandler} from "../../actions/newsActions";


function NewsItemList({news, searchInput, moreInfoHandler}) {
    return (
        <div className="wrapper">
            {news.filter((item) => {
                if (searchInput === "") {
                    return item
                } else if (item.title.toLowerCase().includes(searchInput.toLowerCase())) {
                    return item
                }
            }).map(item => (
                <NewsItem
                    key={item.id}
                    news={item}
                    moreInfoHandler={moreInfoHandler}
                />
            ))}
        </div>
    )
}

const mapStateToProps = ({news}) => ({
    news: news.news,
    searchInput: news.searchInput
});

const mapDispatchToProps = dispatch => ({
    moreInfoHandler: (id) => dispatch(moreInfoHandler(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsItemList);