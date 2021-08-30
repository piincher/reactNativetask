import mongoose, { model } from 'mongoose';
const { Schema } = mongoose;

const CommentSchema = Schema(
	{
		text: {
			type: String,
			required: true
		},
		createdAt: {
			type: Date,
			default: Date.now
		},
		user: {
			type: Schema.Types.ObjectId,
			ref: 'User'
		}
	},
	{ timeStamps: true }
);

const Comment = model('Comment', CommentSchema);
export default Comment;
