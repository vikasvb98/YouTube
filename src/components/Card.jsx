import React from 'react'

const Card = (data) => {
    console.log(data);
  return (
    <div>
        <div>
            <div>
                <span>
                    {data.videoDuration}
                </span>
                <img src={data.videoThumbnail} alt="thumbnail" />
            </div>
        </div>
    </div>
  )
}

export default Card