import React from 'react';

const Card = (data) => {
  console.log(data);
  return (
    <div className='w-64 h-60 flex flex-col gap-3'>
      <div className='relative'>
        <span className='absolute bottom-3 right-3 text-sm text-white border-l-gray-900' key={data.data.videoId}>
          {data.data.videoDuration}
        </span>
        <img className='rounded-md' src={data.data.videoThumbnail} alt="thumbnail" />
      </div>
      <div>
        <div>
          <a href="#">
            <img className='w-8 h-8 rounded-full' src={data.data.channelInfo.image} alt="Channel Image" />
          </a>
        </div>
        <div>
          <h3 className='text-sm font-medium'>
            <a className='text-white hover:text-blue-500' href="#">{data.data.videoTitle}</a>
          </h3>
        </div>
        <div>
          <div>
            <a className='text-sm text-gray-500 hover:text-blue-500' href="#">
              {data.data.channelInfo.name}
            </a>
          </div>
        </div>
        <div className='text-sm text-gray-500'>
          <span>{data.data.videoViews} views </span>
          <span>• {data.data.videoAge}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
