import Data from "../Data";
import {
    CREATE_NEWS,
    MORE_INFO,
    RETURN_INITIAL_DATA,
    REVERSE_NEWS,
    START_SHOW_NEWS,
    SEARCH_INPUT_VALUE,
    SWITCH_ADD_NEWS_FLAG
} from "../actions/types";

const initialState = {
    news: [...Data],
    start: false,
    searchInput: "",
    createNewsFlag: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case START_SHOW_NEWS:
            return {
                ...state,
                start: true
            };
        case RETURN_INITIAL_DATA:
            return {
                ...state,
                news: [...Data]
            };
        case REVERSE_NEWS:
            return {
                ...state,
                news: state.news.reverse().map((item, index) =>
                    index === 0
                        ?
                        {
                            ...item,
                            moreInfo: true
                        }
                        : index === state.news.length - 1 ? {...item, moreInfo: false} : item)
            };
        case MORE_INFO:
            return {
                ...state,
                news: state.news.map(item => item.id === action.payload ? {...item, moreInfo: !item.moreInfo} : item)
            };
        case CREATE_NEWS:
            return {
                ...state,
                news: [...state.news, action.payload]
            };
        case SWITCH_ADD_NEWS_FLAG:
            return {
                ...state,
                createNewsFlag: !state.createNewsFlag
            };
        case SEARCH_INPUT_VALUE:
            return {
                ...state,
                searchInput: action.payload
            };
        default:
            return state;
    }
}