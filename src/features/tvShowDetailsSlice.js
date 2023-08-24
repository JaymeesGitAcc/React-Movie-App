import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    details: {},
    loading: false,
    error: null,

    recommendations: {
        loadingRec: false,
        RecData: {},
        RecError: null
    }
}

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMzljODE4NWI5MTU2ZTkyODhmNDA5YjAzMDkwZDNjMyIsInN1YiI6IjY0YmFjNjI0YWI2ODQ5MDBjNWRkMDZhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YgkOdSEuoaRE4lAtme3XVXtBKEoZrtn2EOTW-bnspcA'
    }
};

export const showDetailsAsync = createAsyncThunk(
    'showDetails/detail',
    async (args, { rejectWithValue }) => {
        try {
            const data = await fetch(`https://api.themoviedb.org/3/tv/${args}?append_to_response=videos`, options);
            const res = await data.json();
            return res;
        } catch (error) {
            return rejectWithValue('Oops! Unable to fetch details');
        }   
    }
);

export const tvShowRecommendations = createAsyncThunk(
    'tvShowRecommendations',
    async (args, { rejectWithValue }) => {
        try {
            const data = await fetch(`https://api.themoviedb.org/3/tv/${args}/recommendations?language=en-US&page=1`, options);
            const res = await data.json();
            return res;
        } catch (error) {
            return rejectWithValue('Oops! Unable to fetch details');
        }   
    }
);

export const showDetailsSlice = createSlice({
    name: 'showDetails',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
        .addCase(showDetailsAsync.pending, (state) => {
            state.loading = true;
        })
        .addCase(showDetailsAsync.fulfilled, (state, action) => {
            state.loading = false;
            state.details = action.payload;
        })
        .addCase(showDetailsAsync.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
        })
        .addCase(tvShowRecommendations.pending, (state) => {
            state.recommendations.loadingRec = true;
        })
        .addCase(tvShowRecommendations.fulfilled, (state, action) => {
            state.recommendations.loadingRec = false;
            state.recommendations.RecData = action.payload;
        })
        .addCase(tvShowRecommendations.rejected, (state, action) => {
            state.recommendations.loadingRec = false;
            state.recommendations.RecError = action.payload;
        })
    }
});

export const tvShowsRec = (state) => state.showDetails.recommendations.RecData; 
export const loadingRec = (state) => state.showDetails.recommendations.loadingRec;
export const recError = (state) => state.showDetails.recommendations.RecError;

export default showDetailsSlice.reducer;