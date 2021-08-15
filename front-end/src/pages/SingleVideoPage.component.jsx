import React from 'react';
import videos from '../products';

const SingleVideoPage = ({ match }) => {
	const video = videos.find((video) => video._id === match.params.id);
	return <div> {video.name}</div>;
};

export default SingleVideoPage;
