import {
    CREATE_NEWS,
    MORE_INFO,
    RETURN_INITIAL_DATA,
    REVERSE_NEWS,
    SEARCH_INPUT_VALUE,
    START_SHOW_NEWS,
    SWITCH_ADD_NEWS_FLAG
} from './types'

export const switchStart = () => {
    return {type: START_SHOW_NEWS}
}

export const returnInitialView = () => {
    return {type: RETURN_INITIAL_DATA}
}

export const reverseNews = () => {
    return {type: REVERSE_NEWS}
}

export const moreInfoHandler = (id) => {
    return {type: MORE_INFO, payload: id}
}

export const createNews = (newNews) => {
    return {type: CREATE_NEWS, payload: newNews}
}

export const setSearchInputValue = (value) => {
    return {type: SEARCH_INPUT_VALUE, payload: value}
}

export const addNewsHandler = () => {
    return {type: SWITCH_ADD_NEWS_FLAG}
}
