import {createSlice} from '@reduxjs/toolkit'
// import Swal from 'sweetalert2';
import toast, { Toaster } from 'react-hot-toast';


const categorySlice = createSlice({
    name:"category",
    initialState:{
        categories:[],
        isFetching: false,
        error: false
    },
    reducers:{
        //GET ALL
        getCategoryStart:(state) =>{
            state.isFetching = true
            state.error = false
        },
        getCategorySuccess:(state, action) =>{
            state.isFetching = false
            state.categories = action.payload;
        },
        getCategoryFailure:(state) =>{
            state.isFetching = false
            state.error = true;
        },





        
    }
});

export const {
    getCategoryStart, 
    getCategorySuccess, 
    getCategoryFailure

} = categorySlice.actions
export default categorySlice.reducer;