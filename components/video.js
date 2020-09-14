import React from 'react';

const Video = ({ video }) => {
    if (!video) {
        return <div>
            Loading...
        </div>
    }
    const vidId = video.id.videoId;
    const vidUrl = 'https://www.youtube.com/embed/' + vidId;

    return (
        <div className="video-detail col-lg-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={vidUrl}></iframe>
            </div>
            <div className="details">
                <div>
                    <h4>{video.snippet.title}</h4>
                </div>
                <hr />
                <div>
                    <small>{video.snippet.description}</small>
                </div>
            </div>
        </div>
    )
};

export default Video;