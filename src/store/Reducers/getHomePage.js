import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {parseData} from "../../utils/Parsedata";

const API_KEY = 'YOUR_API_KEY';

export const getHomePageVideos = createAsyncThunk(
    "youtube/App/homePageVideos",
    async (isnext, {getState}) => {
            const {youtubeApp: {nextPageToken: nextPageTokenFromState,videos}} = getState();
            const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?maxResults=20&q="one piece"&key=${API_KEY}&part=snippet&type=video`);
            const videosData = response.data.items

            const parsedData = await parseData(videosData)
            return { parsedData: [...videos, ...parsedData], nextPageToken:nextPageTokenFromState};
    }
)