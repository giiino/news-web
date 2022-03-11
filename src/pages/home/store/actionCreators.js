import { actionTypes } from './';
import axios from 'axios';

const newsDataAction = (covid19_data, taiwan_data, china_data, usa_data, anime_data) =>({
    type:actionTypes.AJAX_TO_HOMESECTION,
    covid19_data:covid19_data,
    taiwan_data:taiwan_data,
    china_data:china_data,
    usa_data:usa_data,
    anime_data:anime_data
})

const modifyAjaxData = (list) =>{
    let modifiedList = list.map(item=>{
        return {
            ...item, 
            viewer:0, 
            like:0, 
            comment:[]
        }
    })
    return modifiedList
}
export const throwAwayAction = (id) =>({
    type:actionTypes.DISLIKE_ARTICLE,
    id
})
export const articleLikeAction = (item) =>({
    type:actionTypes.LIKE_ARTICLE,
    item
})


export const getNewsData = () =>{
    return (dispatch) =>{
        let now = new Date().getTime()
        if(localStorage.getItem('ajaxData') == null || now - JSON.parse(localStorage.getItem('ajaxData')).time > 24*60*60*1000){
            axios.all([
                axios.get(`/getNews?q=covid-19`),
                axios.get(`/getNews?q=taiwan`),
                axios.get(`/getNews?q=china`),
                axios.get(`/getNews?q=usa`),
                axios.get(`/getNews?q=anime`)
            ]).then(axios.spread(function (resA, resB, resC, resD, resE){
                localStorage.setItem(
                    'ajaxData',
                    JSON.stringify(
                        {
                            time:now,
                            resA:resA,
                            resB:resB,
                            resC:resC,
                            resD:resD,
                            resE:resE,
                        }
                    )
                )
                dispatch(newsDataAction(resA.data.articles, resB.data.articles, resC.data.articles, resD.data.articles, resE.data.articles))
            }))
        }else{
            let local_ajax_data = JSON.parse(localStorage.getItem('ajaxData'))
            dispatch(
                newsDataAction(
                    modifyAjaxData(local_ajax_data.resA.data.articles), 
                    modifyAjaxData(local_ajax_data.resB.data.articles), 
                    modifyAjaxData(local_ajax_data.resC.data.articles), 
                    modifyAjaxData(local_ajax_data.resD.data.articles), 
                    modifyAjaxData(local_ajax_data.resE.data.articles)
            ))
        }

    }
}
