import { addPost, byId, deletePost, getPosts, updatePost } from "./model.js";
import path from "path";

const HOST = process.env.HOST || 'http://localhost:8000'

export default {
  GET_POSTS: async (_, res) => {
    const posts = await getPosts();
    posts.map((e) => (e.post_img = `${HOST}/view/${e.post_img}`));

    res.send(posts);
  },
  GET_IMG: async (req, res) => {
    let { fileName } = req.params;
    res.sendFile(path.resolve("uploads", fileName));
  },
  BY_ID: async (req, res) => {
    const { post_id } = req.params
    const post = await byId(post_id)
    post.post_img = `${process.env.HOST}/view/${post.post_img}`

    res.status(200).json({
      status: 200,
      data: post
    })
  },
  ADD_POST: async (req, res) => {
    const { post_title, post_body, post_category } = req.body;
    let { image } = req.files;
    const { user_id } = req.headers;

    let fileName = Date.now() + image.name.replace(/\s/g, "");
    image.mv(path.resolve("uploads", fileName));

    await addPost(post_title, post_body, fileName, post_category, +user_id);

    res.status(200).json({
      status: 200,
      message: "New post added!",
    });
  },
    DELETE_POST: async (req, res) => {
    const { post_id } = req.params;
    const { user_id } = req.headers;
    await deletePost(post_id, user_id);
    res.status(200).json({
      status: 200,
      message: 'Post deleted'
    })
  },
  UPDATE_POST: async (req, res) => {
    const { post_title, post_body, post_category } = req.body;
    const { post_id } = req.params;
    const { user_id } = req.headers;

    let { image } = req.files;

    let fileName = Date.now() + image.name.replace(/\s/g, "");
    image.mv(path.resolve("uploads", fileName));

    const updatedPost = await updatePost(post_title, post_body, fileName, post_category, post_id, user_id);
    res.send('ok')
  },
};
