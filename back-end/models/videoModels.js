import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const VideoSchema = Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'User'
		},
		title: {
			type: String,
			required: true
		},
		description: {
			type: String,
			required: true
		},
		view: {
			type: Number,
			default: 0
		},
		createdAt: {
			type: Date,
			default: Date.now
		},
		comments: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Comment'
		},
		thumbnails: {
			type: String,
			required: 'File url'
		}
	},
	{
		timestamps: true
	}
);

const Video = model('video', VideoSchema);
export default Video;
