import React, { Fragment, useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { ReactVideo } from 'reactjs-media';
import axios from 'axios';
const VideoPlayer = ({ match }) => {
	const [ video, setVideo ] = useState({});
	const id = match.params.id;
	useEffect(
		() => {
			const fetchVideo = async () => {
				const { data } = axios.get(`/api/videos/${id}`);
				setVideo(data);
			};
			fetchVideo();
		},
		[ id ]
	);
	return (
		<Fragment>
			<div className="lg:flex lg:space-x-10 text-left space-y-8 lg:space-y-0">
				<div className="bg-white border-2 border-gray-700 rounded shadow-xl">
					<ReactVideo src={video.thumbnails} poster={video.image} className="w-full rounded-b" />
				</div>
			</div>
			<h3 className="hover:text-indigo-600 transition duration-200  font-bold text-gray-900 ">
				Nom :{video.name}
			</h3>
			<p className="text-lg p-4 text-green-700">Description :{video.description}</p>
		</Fragment>
	);
};

export default withRouter(VideoPlayer);
