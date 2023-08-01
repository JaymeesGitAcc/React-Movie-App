import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    list: [],
    loading: false,
    error: null,
}

export const trendingMoviesAsync = createAsyncThunk(
    'trendingMovies/data',
    async (args, { rejectWithValue }) => {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMzljODE4NWI5MTU2ZTkyODhmNDA5YjAzMDkwZDNjMyIsInN1YiI6IjY0YmFjNjI0YWI2ODQ5MDBjNWRkMDZhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YgkOdSEuoaRE4lAtme3XVXtBKEoZrtn2EOTW-bnspcA'
            }
          };
        try {
            const data = await fetch(`https://api.themoviedb.org/3/trending/movie/${args}`, options);
            if(!data.ok)
                return rejectWithValue('Error occured while fetching data');
            const response = await data.json();
            return response;
        } catch (error) {
            return rejectWithValue('Error occured while fetching data');
        }
    }
);

export const trendingMovies = createSlice({
    name: 'trendingMovies',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(trendingMoviesAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(trendingMoviesAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.list = action.payload;
                state.error = null;
            })
            .addCase(trendingMoviesAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
});

export default trendingMovies.reducer;