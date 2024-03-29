import { createSlice } from "@reduxjs/toolkit";
import { getHomePageVideos } from "../../store/Reducers/getHomePage";

const initialState = {
    videos: [],
    currentPlaying: null,
    searchTerm: "",
    searchResult: [],
    nextPageToken: null,
    recommendedVideos:[]
}

const youtubeSlice = createSlice({
    name: "youtubeApp",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getHomePageVideos.fulfilled, (state,action) => {
            if(action.payload && action.payload.parsedData){
                state.videos = action.payload.parsedData;
                state.nextPageToken = action.payload.nextPageToken;
                state.currentPlaying = null;
            }
        })
    }
})
export default youtubeSlice.reducer;