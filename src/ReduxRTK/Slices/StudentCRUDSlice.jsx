import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// API Read Data
export const readData = createAsyncThunk('api/read', async () => {
    let response = await fetch('https://cruddata-anea.onrender.com/users');

    try {
        let data = await response.json();
        // console.log(data);
        return data;
    }
    catch (error) {
        return error.message;
    }
});

// API Insert Data
export const insertData = createAsyncThunk('api/insert', async (formData) => {
    let response = await fetch('https://cruddata-anea.onrender.com/users', {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(formData)
    });

    try {
        let data = await response.json();
        // console.log(data);
        return data;
    }
    catch (error) {
        return error.message;
    }
});

// API Update Data
export const updateData = createAsyncThunk('api/update', async (formData) => {
    console.log(formData);

    let response = await fetch('https://cruddata-anea.onrender.com/users/${formData.id}', {
        method: "PUT",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(formData)
    });

    try {
        let data = await response.json();
        // console.log(data);
        return data;
    }
    catch (error) {
        return error.message;
    }
});


// API Delete Data
export const deleteData = createAsyncThunk('api/delete', async (id) => {
    let response = await fetch('https://cruddata-anea.onrender.com/users/${id}', {
        method: "DELETE"
    });
    console.log(response);

    return id;
});


export const StudentCRUDSlice = createSlice({
    name: "CRUD",

    initialState: {
        isLoading: false,
        data: [],
        searchData: [],
        error: null
    },

    reducers: {
        searchUser: (state, action) => {
            state.searchData = action.payload
        }
    },

    extraReducers: (builder) => {
        // Read data
        builder.addCase(readData.pending, (state, action) => {
            state.isLoading = true;
            state.error = action.payload;
        });
        builder.addCase(readData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(readData.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });

        // Insert data
        builder.addCase(insertData.pending, (state, action) => {
            state.isLoading = true;
            state.error = action.payload;
        });
        builder.addCase(insertData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data.push(action.payload);
        });
        builder.addCase(insertData.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });

        // Update data
        builder.addCase(updateData.pending, (state, action) => {
            state.isLoading = true;
            state.error = action.payload;
        });
        builder.addCase(updateData.fulfilled, (state, action) => {
            state.isLoading = false;
            const { rollno } = action.payload;
            state.data = state.data.map((value) => value.rollno === rollno)
        });
        builder.addCase(updateData.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });

        // Delete data
        builder.addCase(deleteData.pending, (state, action) => {
            state.isLoading = true;
            state.error = action.payload;
        });
        builder.addCase(deleteData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = state.data.filter((value) => value.id !== action.payload)
        });
        builder.addCase(deleteData.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    }
});

export default StudentCRUDSlice.reducer;
export const { searchUser } = StudentCRUDSlice.actions;