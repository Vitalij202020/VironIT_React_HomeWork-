import React from 'react';
import './NewsItem.css'


export default React.memo(function NewsItem (props) {
    const {id, url, name, publishedAt, author, title, moreInfo, description} = props.news
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
                        <div className='moreInfo'>
                            <button className='button' onClick={() => props.moreInfoHandler(id)}>Close Info</button>
                        </div>
                    </>
                    :
                    <div className='moreInfo'>
                        <button className='button' onClick={() => props.moreInfoHandler(id)}>More Info</button>
                    </div>
                }
            </div>
        </div>
    )
})
