import axios from 'axios';


const API_KEY = 'YOUR_API_KEY';

export const parseData = async(videosData) => {
    try {
        const videosIds = videosData.map(item => item.id.videoId);
        const channelIds = videosData.map(item => item.snippet.channelId);


    const channelsResponse = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels`, {
            params: {
                part: 'snippet,contentDetails',
                id: channelIds.join(','),
                key: API_KEY
            }
        });
    const channelsData = channelsResponse.data.items;

    const videosResponse = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos`, {
        params: {
            part: 'snippet,contentDetails,statistics',
            id: videosIds.join(','),
            key: API_KEY
        }
    });

    const videoData = videosResponse.data.items;

    const parsedVideosData = videosData.map((item, index) => {
        const channel = channelsData.find(channel => channel.id === item.snippet.channelId);
        const video = videoData.find(video => video.id === item.id.videoId);

        return {
            videoId: item.id.videoId,
            videoTitle: item.snippet.title,
            videoDescription: item.snippet.description,
            videoThumbnail: item.snippet.thumbnails.medium.url,
            videoLink: `https://www.youtube.com/watch?v=${item.id.videoId}`,
            videoDuration: parseVideoDuration(video.contentDetails.duration),
            videoViews: convertRawtoString(video.statistics.viewCount),
            videoAge: timeSince(new Date(item.snippet.publishedAt)),
            channelInfo: {
                id: item.snippet.channelId,
                name: item.snippet.channelTitle,
                image: channel ? channel.snippet.thumbnails.default.url : null
            }
        };
    });
    return parsedVideosData;
} catch (error) {
    console.error(error.message);
    throw error;
}
};
const parseVideoDuration = (duration) => {
    const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
    const hours = (parseInt(match[1]) || 0);
    const minutes = (parseInt(match[2]) || 0);
    const seconds = (parseInt(match[3]) || 0);
    let parsedDuration = '';
    
    if (hours > 0) {
        parsedDuration += hours + 'h ';
    }
    if (minutes > 0) {
        parsedDuration += minutes + 'm ';
    }
    if (seconds > 0) {
        parsedDuration += seconds + 's';
    }
    return parsedDuration.trim();
    
};
const convertRawtoString = (viewCount) => {
    if (viewCount < 1000) {
        return viewCount.toString();
    } else if (viewCount < 1000000) {
        return Math.round(viewCount / 1000) + 'K';
    } else {
        return Math.round(viewCount / 1000000) + 'M';
    }
};
const timeSince = (date) => {
    const seconds = Math.floor((new Date() - date) / 1000);
    let interval = Math.floor(seconds / 31536000);
    
    if (interval > 1) {
        return interval + " years ago";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
        return interval + " months ago";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
        return interval + " days ago";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        return interval + " hours ago";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
        return interval + " minutes ago";
    }
    return Math.floor(seconds) + " seconds ago";
};