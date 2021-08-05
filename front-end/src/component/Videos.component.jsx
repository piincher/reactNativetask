import videos from '../products';
import Video from '../component/Video.component';
const Videos = () => {
	return (
		<div>
			<h1>hi</h1>
			{videos.map((video) => {
				return (
					<div key={video._id}>
						<Video video={video} />
					</div>
				);
			})}
		</div>
	);
};

export default Videos;
