import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    data: {},
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

export const personDetailsAsync = createAsyncThunk(
    'person/details',
    async (args, { rejectWithValue }) => {
        try {
            const data = await fetch(`https://api.themoviedb.org/3/person/${args}?language=en-US`, options);
            if (!data.ok)
                return rejectWithValue('Some error occured while fetching data');
            const response = data.json();
            return response;
        } catch (error) {
            return rejectWithValue('Some error occured while fetching the data');
        }
    }
);

export const personDetails = createSlice({
    name: 'personDetails',
    initialState,
    extraReducers: builder => {
        builder
        .addCase(personDetailsAsync.pending, (state) => {
            state.loading = true;
        })
        .addCase(personDetailsAsync.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(personDetailsAsync.rejected, (state,action) => {
            state.loading = false;
            state.error = action.payload;
        });
    }
});

export const loader = (state) => state.personDetails.loading;
export const personData = (state) => state.personDetails.data;
export const errorMessage = (state) => state.personDetails.error;

export default personDetails.reducer;

