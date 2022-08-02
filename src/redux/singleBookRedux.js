import {createSlice} from '@reduxjs/toolkit'
// import Swal from 'sweetalert2';
import toast, { Toaster } from 'react-hot-toast';


const singlebookSlice = createSlice({
    name:"book",
    initialState:{
        book:{},
        isFetching: false,
        error: false
    },
    reducers:{


        //GET ALL
        getSingleBookStart:(
            state
            ) =>{
            state.isFetching = true
            state.error = false
        },
        getSingleBookSuccess:(state, action) =>{
            state.isFetching = false
            state.book = action.payload;
            // state.book[state.products.findIndex((item) => item._id === action.payload)] = action.payload.product;

        },
        getSingleBookFailure:(state) =>{
            state.isFetching = false
            state.error = true;
        },
    }
});

export const {
    getSingleBookStart,
    getSingleBookSuccess,
    getSingleBookFailure

} = singlebookSlice.actions
export default singlebookSlice.reducer;