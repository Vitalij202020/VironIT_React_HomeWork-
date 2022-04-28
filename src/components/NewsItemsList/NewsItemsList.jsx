import React from 'react';
import NewsItem from "../NewsItem/NewsItem";


class NewsItemList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            this.props.state.news.filter((item) => {
                    if (this.props.state.searchInput === "" || this.props.state.searchInput === "Search NewsItem...") {
                        return item
                    } else if (item.title.toLowerCase().includes(this.props.state.searchInput.toLowerCase())) {
                        return item
                    }
                }).map(item => (
                    <NewsItem
                        key={item.id}
                        news={item}
                        moreInfoHandler={this.props.moreInfoHandler}
                    />
                ))
        )
    }
}

export default NewsItemList;