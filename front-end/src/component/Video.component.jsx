import { Link } from 'react-router-dom';
const Video = ({ video }) => {
	return (
		<Link
			to={`/videos/${video._id}`}
			className="container mx-auto shadow-lg rounded-lg max-w-md hover:shadow-2xl transition duration-300"
		>
			<img src={video.image} alt="" className="rounded-t-lg w-full" />
			<div className="p-6">
				<h1 className="md:text-1xl text-xl hover:text-green-600 transition duration-200  font-bold text-gray-900 ">
					{video.name}
				</h1>
				<p className="text-gray-700 my-2 hover-text-900 ">{video.description}</p>
			</div>
		</Link>
	);
};

export default Video;
