import mongoose from 'mongoose';
import express from 'express';


const postSchema = mongoose.Schema({
    title:String,
    mesage: String,
    creator:String,
    tags:[String],
    selectedFiles:String,
    likeCount:{
      type:Number,
      default:0
    },
    createdAt:{
    type:Date,
    default:new Date()
    }
});


const PostMessage = mongoose.model('PostMessage',postSchema);
export default PostMessage;