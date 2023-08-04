import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    details: [],
    loading: false,
    error: null
}

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMzljODE4NWI5MTU2ZTkyODhmNDA5YjAzMDkwZDNjMyIsInN1YiI6IjY0YmFjNjI0YWI2ODQ5MDBjNWRkMDZhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YgkOdSEuoaRE4lAtme3XVXtBKEoZrtn2EOTW-bnspcA'
    }
};

export const movieDetailsAsync = createAsyncThunk(
    'movieDetails/detail',
    async (args, { rejectWithValue }) => {
        try {
            const data = await fetch(`https://api.themoviedb.org/3/movie/${args}`, options);
            const res = await data.json();
            return res;
        } catch (error) {
            return rejectWithValue('Oops! Unable to fetch details');
        }   
    }
);

export const movieDetailsSlice = createSlice({
    name: 'movieDetails',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
        .addCase(movieDetailsAsync.pending, (state) => {
            state.loading = true;
        })
        .addCase(movieDetailsAsync.fulfilled, (state, action) => {
            state.loading = false;
            state.details = action.payload;
        })
        .addCase(movieDetailsAsync.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
        })
    }
});

export default movieDetailsSlice.reducer;