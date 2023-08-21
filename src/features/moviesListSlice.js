import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    list: {},
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

const errorMessage = 'Some Error occurred';

export const movieListAsync = createAsyncThunk(
    'movies',
    async (args, { rejectWithValue }) => {
        try {
            const data = await fetch(`https://api.themoviedb.org/3/movie/${args}?language=en-US&page=1`, options);
            if (!data.ok)
                return rejectWithValue(errorMessage);
            const response = data.json();
            return response;
        } catch (error) {
            return rejectWithValue(errorMessage);
        }
    }
)

export const movieList = createSlice({
    name: 'movieList',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(movieListAsync.pending, (state) => {
            state.loading = true;
        })
        .addCase(movieListAsync.fulfilled, (state, action) => {
            state.loading = false;
            state.list = action.payload;
        })
        .addCase(movieListAsync.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
})

export default movieList.reducer;