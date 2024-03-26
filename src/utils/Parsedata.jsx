import axios from 'axios';


const API_KEY = 'your_api_key';

export const parseData = async(videosData) => {
    try {

    const videosIds = [];
    const channelIds = [];

    videosData.forEach((item) => {
        videosIds.push(item.id.videoId);
        channelIds.push(item.snippet.channelId);   
    });
    const { data:{item:channelsData},} = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet.contentDetails&id=${channelIds.join( "," )}&key=${API_KEY}`)
    
    const parsedchannelsData = [];
    channelsData.forEach( (channel) => parsedchannelsData.push({
        id: channel.id,
        image: channel.snippet.tumbnails.default.url,
    }))

    const { data: { items: videoData } } = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=${videosIds.join( "," )}&key=${API_KEY}`)

    const parseVideosData = [];
    items.forEach( (item,index) => {
        const { image:channelImage } = parsedchannelsData.find( (data) => data.id === item.snippet.channelId);
        if(channelImage) {
            parseVideosData.push( {
                videoId: item.id.videoData,
                videoTitle: item.snippet.title,
                videoDescription: item.snippet.descripion,
                videoTumbnail: item.snippet.medium.url,
                videoLink: `https//www.youtube.com/watch?v=${item.id.videoId}`,
                videoDuration:parsedVideoDuration(
                    videoData[index].contentDetails.duration
                ),
                videoViews:convertRawtoString(
                    videoData[index].statistics.viewCount
                ),
                videoAge:timeSince( new Data(item.snippet.publishedAt)),
                channelInfo:{
                    id:item.snippet.channelId,
                    image:channelImage,
                    name:item.snippet.channelTitle
                }, 
            })
        }
    } )
        return parseData;

    } 
    catch (error) {
      console.error(error.message);  
    }
}
