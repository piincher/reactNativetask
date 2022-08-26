import axios from 'axios';

export const uploadMedia = async ({ type, file, preset }) => {
	const formData = new FormData();
	formData.append('upload_preset', preset);
	formData.append('file', file);
	const data = await axios
		.post(`https://api.cloudinary.com/v1_1/piincher/${type}/upload`, formData)
		.then((res) => res.data);
	return data.secure_url;
};