import { useState, useEffect } from 'react';
import axios from 'axios';
import Video from '../component/Video.component';
const Videos = () => {
	const [ videos, setVideos ] = useState([]);
	useEffect(() => {
		const fetchVideos = async () => {
			const { data } = await axios.get('/api/videos');
			setVideos(data);
		};
		fetchVideos();
	}, []);
	return (
		<div className="bg-gray-100 min-h-screen py-32 px-10 ">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-10 xl-grid-cols-4 gap-y-10 gap-x-6 ">
				{videos.map((video) => {
					return <Video key={video._id} video={video} />;
				})}
			</div>
		</div>
	);
};

export default Videos;
