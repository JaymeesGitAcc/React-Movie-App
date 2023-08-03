import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMzljODE4NWI5MTU2ZTkyODhmNDA5YjAzMDkwZDNjMyIsInN1YiI6IjY0YmFjNjI0YWI2ODQ5MDBjNWRkMDZhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YgkOdSEuoaRE4lAtme3XVXtBKEoZrtn2EOTW-bnspcA'
    }
};

export const searchSliceAsync = createAsyncThunk(
    'search/results',
    async (args, { rejectWithValue }) => {
        try {
            const data = await fetch(`https://api.themoviedb.org/3/search/multi?query=${args}&include_adult=false&language=en-US&page=1`, options);

            if (!data.ok)
                return rejectWithValue('Some error occured');
            const res = await data.json();
            return res;
        } catch (error) {
            return rejectWithValue('Some error occured');
        }
    }
);

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        data: [],
        loading: false,
        error: null
    },
    extraReducers: builder => {
        builder
        .addCase(searchSliceAsync.pending, (state) => {
            state.loading = true;
        })
        .addCase(searchSliceAsync.fulfilled, (state, action) =>  {
            state.data = action.payload;
            state.loading = false;
        })
        .addCase(searchSliceAsync.rejected, (state, action)=> {
            state.error = action.payload;
            state.loading = false;
        })
    }
});

export default searchSlice.reducer;