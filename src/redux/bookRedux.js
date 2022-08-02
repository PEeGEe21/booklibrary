import {createSlice} from '@reduxjs/toolkit'
// import Swal from 'sweetalert2';
import toast, { Toaster } from 'react-hot-toast';


const bookSlice = createSlice({
    name:"book",
    initialState:{
        books:[],
        isFetching: false,
        error: false
    },
    reducers:{
        //GET ALL
        getBookStart:(state) =>{
            state.isFetching = true
            state.error = false
        },
        getBookSuccess:(state, action) =>{
            state.isFetching = false
            state.books = action.payload;
        },
        getBookFailure:(state) =>{
            state.isFetching = false
            state.error = true;
        },


    }
});

export const {
    getBookStart, 
    getBookSuccess, 
    getBookFailure
} = bookSlice.actions
export default bookSlice.reducer;