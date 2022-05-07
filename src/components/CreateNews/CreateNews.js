import React, {useState} from 'react';
import './CreateNews.css'
import {connect} from "react-redux";
import {createNews} from "../../actions/newsActions";

const CreateNews = ({createNews, newsLength}) => {
    const [name, setName] = useState('')
    const [url, setUrl] = useState('')
    const [author, setAuthor] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    function addNews(e) {
        e.preventDefault()
        const now = new Date()
        const newNews = {
            id: newsLength + 1,
            name: name || 'unknown',
            url: url || 'https://inclusiv25.com/wp-content/uploads/2021/05/news-1.jpg',
            author: author || 'unknown',
            title: title || 'unknown',
            description: description || 'unknown',
            publishedAt: `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`,
            moreInfo: false
        }
        createNews(newNews)
    }

    return (
        <>
            <h3>Please, Fill Out The Form To Create a News</h3>
            <div className="addNewsForm">
                <form onSubmit={(e)=> addNews(e)}>
                    <label htmlFor="name">Source Name</label>
                    <input
                        className='input__createNews'
                        type="text"
                        id="name"
                        placeholder='Source..'
                        onChange={(e)=> setName(e.target.value)}
                    />

                    <label htmlFor="url">Url Picture</label>
                    <input
                        className='input__createNews'
                        type="text"
                        id="url"
                        placeholder="https://example.."
                        onChange={(e)=> setUrl(e.target.value)}
                    />

                    <label htmlFor="author">Author Name</label>
                    <input
                        className='input__createNews'
                        type="text"
                        id="author"
                        placeholder="Author.."
                        onChange={(e)=> setAuthor(e.target.value)}
                    />

                    <textarea
                        placeholder='Enter The News Title...'
                        onChange={(e)=> setTitle(e.target.value)}
                    />

                    <textarea
                        placeholder='Enter a Description of the News...'
                        onChange={(e)=> setDescription(e.target.value)}
                    />

                    <input
                        className='input__createNewsSubmit'
                        type="submit"
                        value="Submit"
                    />
                </form>
            </div>
        </>
    );
};

const mapStateToProps = ({news}) => ({
    newsLength: news.news.length
});

const mapDispatchToProps = dispatch => ({
    createNews: (newNews) => dispatch(createNews(newNews))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateNews);