import React from 'react';
import NewsItem from "../NewsItem/NewsItem";
import './NewsItemsList.css'


function NewsItemList(props) {
    return (
        <div className="wrapper">
            {props.news.filter((item) => {
                if (props.searchInput === "" || props.searchInput === "Search News...") {
                    return item
                } else if (item.title.toLowerCase().includes(props.searchInput.toLowerCase())) {
                    return item
                }
            }).map(item => (
                <NewsItem
                    key={item.id}
                    news={item}
                    moreInfoHandler={props.moreInfoHandler}
                />
            ))}
        </div>
    )
}

export default NewsItemList;