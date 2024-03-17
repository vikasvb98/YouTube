import {configureStore} from '@reduxjs/toolkit'
import youtubeReducer from '../Feautres/youtube/youtubeSlice'

const store = configureStore({
    reducer: {
        youtubeApp: youtubeReducer
    }
});

export default store;