import { 
    getBookFailure, 
    getBookStart, 
    getBookSuccess} from "./bookRedux";
import { 
    getCategoryFailure, 
    getCategoryStart, 
    getCategorySuccess } from "./categoryRedux";

import { 
    getSingleBookFailure, 
    getSingleBookStart, 
    getSingleBookSuccess } from "./singleBookRedux";

import {allBooks, allCategories, host, allAuthors} from '../apiCalls'
import axios from 'axios'
import { getAuthorFailure, getAuthorStart, getAuthorSuccess } from "./authorRedux";


    
export const getBooks = async (dispatch) => {
    dispatch(getBookStart());
    try{
        const res = await axios.get(`${allBooks}`)

        console.log(res.data)

        dispatch(getBookSuccess(res.data));

    }catch(err){
        dispatch(getBookFailure())
    }
}

export const getAuthors = async (dispatch) => {
    dispatch(getAuthorStart());
    try{
        const res = await axios.get(`${allAuthors}`)

        console.log(res.data)

        dispatch(getAuthorSuccess(res.data));

    }catch(err){
        dispatch(getAuthorFailure())
    }
}



export const getSingleBook = async (id, dispatch) => {
    dispatch(getSingleBookStart());
    try{
        const res = await axios.get(`${host}/api/books/${id}`)

        console.log(res.data)

        dispatch(getSingleBookSuccess(res.data));

    }catch(err){
        dispatch(getBookFailure())
    }
}







//CATEGORIES
export const getCategories = async (dispatch) => {
    dispatch(getCategoryStart());
    try{
        const res = await axios.get(`${allCategories}`)
        console.log(res.data)
        dispatch(getCategorySuccess(res.data.books));

    }catch(err){
        dispatch(getCategoryFailure())
    }
}

