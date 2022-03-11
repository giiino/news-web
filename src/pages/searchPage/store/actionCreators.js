import { actionTypes } from './';
import axios from 'axios';

export const changeTermAction = (term) =>({
    type:actionTypes.CHANGE_TERM,
    term
})
const newsDataAction = (article) =>({
    type:actionTypes.AJAX_SEARCH_DATA,
    searchlist:article
})

export const getNewsData = (term) =>{
    return (dispatch) =>{
        axios.get(`/getNews?q=${term}`).then((res)=>{
            dispatch(newsDataAction(res.data.articles))
        })
    }
}