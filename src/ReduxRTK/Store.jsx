import { configureStore } from "@reduxjs/toolkit";
import  StudentCRUDSlice  from "./Slices/StudentCRUDSlice";
import  AuthSlice  from "./Slices/UserAuthSlice";


const CRUD_Store = configureStore({
    reducer:{
        allCRUD: StudentCRUDSlice,
        userAuth: AuthSlice
    }
});

export default CRUD_Store;