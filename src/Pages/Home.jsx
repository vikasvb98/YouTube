import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { useAppDispatch, useAppSelector } from '../hooks/useApp'
import { getHomePageVideos } from '../store/Reducers/getHomePage'

const Home = () => {
    const dispatch = useAppDispatch();
    const videos = useAppSelector( (state) => state.youtubeApp.videos);

    useEffect( () => {
        dispatch(getHomePageVideos(false));
    },[dispatch])
  return (
    <>
        <Navbar />
        <Sidebar/>
    </>
  )
}

export default Home