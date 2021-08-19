import { uploadMedia } from '../utils/uploadMedia';

const VideoUploadPage = () => {
	const handleUploadVideo = async (event) => {
		const file = event.target.files[0];

		if (file) {
			const url = await uploadMedia({ type: 'video', file, preset: 'islamTube' });
			console.log(url);
		}
	};
	return (
		<div>
			<div>
				<input onChange={handleUploadVideo} type="file" accept="video/*" />
			</div>
			<div>
				<h1>Uploaded image will be displayed here</h1>
			</div>
		</div>
	);
};
export default VideoUploadPage;
