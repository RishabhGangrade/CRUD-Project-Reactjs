import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// API Read Data
export const loginUser = createAsyncThunk('api/loginUser', async (userData, thunkAPI) => {

    try {
        let response = await fetch('http://localhost:3000/users');

        if (!response.ok) {
            throw new Error("Something went wrong");
        }

        let data = await response.json();

        let user = data.find((value) => value.email == userData.email.trim() && value.password == userData.password);

        if (!user) {
            return thunkAPI.rejectWithValue("Invalid email or password");
        }
        if (user.role !== "Admin") {
            return thunkAPI.rejectWithValue("Only admin can login");
        }

        return user;

    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }

});

export const AuthSlice = createSlice({
    name: "userAuth",

    initialState: {
        loading: false,
        error: null,
        user: JSON.parse(localStorage.getItem('user') || null)
    },

    reducers: {
        userLogout: (state)=>{
            state.user  = null,
            state.error = null,

            localStorage.removeItem('user');
        }
    },

    extraReducers: (builder) => {
        builder.addCase(loginUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        });

        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;

            localStorage.setItem('user', JSON.stringify(action.payload))
            
        });

        builder.addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    }

});

export default AuthSlice.reducer;

export const { userLogout } = AuthSlice.actions;


