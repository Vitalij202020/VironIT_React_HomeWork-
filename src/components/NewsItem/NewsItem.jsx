import React from 'react';
import './NewsItem.css'


class NewsItem extends React.Component {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return JSON.stringify(this.props.news) !== JSON.stringify(nextProps.news)
    }

    render() {
        const {id, url, name, publishedAt, author, title, moreInfo, description} = this.props.news
        return (
            <div className="card">
                <img src={url} alt=""/>
                <div className="bottom">
                    <h4><b>{title}</b></h4>
                    <div className="source">
                        <p>{publishedAt}</p>
                        <p><strong>{author}</strong></p>
                        <p>{name}</p>
                    </div>

                    {moreInfo
                        ?
                        <>
                            <p>{description}</p>
                            <button className='button' onClick={() => this.props.moreInfoHandler(id)}>Close Info</button>
                        </>
                        :
                        <button className='button' onClick={() => this.props.moreInfoHandler(id)}>More Info</button>
                    }
                </div>
            </div>
        )
    }
}

export default NewsItem;