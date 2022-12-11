import mongoose from "mongoose";

const SongsSchema=new mongoose.Schema({
    id: {
        type:Number,
        required: [true,'Please provide a id'],
    },
    user_id: {
        type:String,
        required: [true,'required'],
    },
    song_id: {
        type:String,
        required: [true,'required'],
    },
    listen_count: {
        type:Number,
        required: [true,'required'],
    },
    title: {
        type:String,
        required: [true,'required'],
    },
    release: {
        type:String,
        required: [true,'required'],
    },
    artist_name: {
        type:String,
        required: [true,'required'],
    },
    year: {
        type:Number,
        required: [true,'required'],
    },
})
export default mongoose.model('Songs',SongsSchema)