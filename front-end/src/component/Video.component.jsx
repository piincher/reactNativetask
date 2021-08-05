import { Link } from 'react-router-dom';
const Video = ({ video }) => {
	return (
		<div className="p-20 bg-purple-100">
			<div className="bg-white rounded-lg shadow-lg w-full md:w-1/2">
				<img src={video.image} alt={video.name} className="rounded-t-lg" />
				<div className="p-6">
					<h2 className="font-bold mb-2 text-2xl text-purple-800">{video.name}</h2>
					<p className="text-purple-700 mb-2">{video.description}</p>
					<Link to={`/video/${video._id}`}>Voir la video</Link>
				</div>
			</div>
		</div>
	);
};
export default Video;
