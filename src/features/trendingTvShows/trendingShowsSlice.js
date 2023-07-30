import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    list: [],
    loading: false,
    error: null
}

export const trendingShowsAsync = createAsyncThunk(
    'trendingShows/data',
    async (args, { rejectWithValue }) => {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMzljODE4NWI5MTU2ZTkyODhmNDA5YjAzMDkwZDNjMyIsInN1YiI6IjY0YmFjNjI0YWI2ODQ5MDBjNWRkMDZhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YgkOdSEuoaRE4lAtme3XVXtBKEoZrtn2EOTW-bnspcA'
            }
          };
        try {
            const data = await fetch(`https://api.themoviedb.org/3/trending/tv/${args}`, options);
            if(!data.ok)
                return rejectWithValue('Error occured while fetching data');
            const response = data.json();
            return response;
        } catch (error) {
            return rejectWithValue('Error occured while fetching data');
        }
    }
);

export const trendingShows = createSlice({
    name: 'trendingShows',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(trendingShowsAsync.pending, (state) => {
            state.loading = true;
        })
        .addCase(trendingShowsAsync.fulfilled, (state, action) => {
            state.list = action.payload;
            state.error = null;
            state.loading = false;
        })
        .addCase(trendingShowsAsync.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
});

export default trendingShows.reducer;