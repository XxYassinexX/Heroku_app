import mongoose from 'mongoose';


const commentSchema = mongoose.Schema({
postid: String,
userid: String,
username: String,
message: String,
});


const comment = mongoose.model('comment', commentSchema);
export default comment;