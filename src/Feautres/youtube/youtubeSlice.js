import { createSlice } from "@reduxjs/toolkit";
import { getHomePageVideos } from "../../store/Reducers/getHomePage";

const initialState = {
    video: [],
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
            
        })
    }
})
export default youtubeSlice.reducer;