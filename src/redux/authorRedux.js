import {createSlice} from '@reduxjs/toolkit'
// import Swal from 'sweetalert2';
import toast, { Toaster } from 'react-hot-toast';


const authorSlice = createSlice({
    name:"author",
    initialState:{
        authors:[],
        isFetching: false,
        error: false
    },
    reducers:{
        //GET ALL
        getAuthorStart:(state) =>{
            state.isFetching = true
            state.error = false
        },
        getAuthorSuccess:(state, action) =>{
            state.isFetching = false
            state.authors = action.payload;
        },
        getAuthorFailure:(state) =>{
            state.isFetching = false
            state.error = true;
        },


    }
});

export const {
    getAuthorStart, 
    getAuthorSuccess, 
    getAuthorFailure
} = authorSlice.actions
export default authorSlice.reducer;