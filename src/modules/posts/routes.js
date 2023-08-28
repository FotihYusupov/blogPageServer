import { Router } from "express";
import posts from "./posts.js";
import authMiddleware from '../../middlewares/auth.middleware.js'

const postsRoutes = Router()

export default postsRoutes
    .get('/posts', posts.GET_POSTS)
    .get('/view/:fileName', posts.GET_IMG)
    .get('/post/:post_id', posts.BY_ID)
    .get('/search/:title', posts.SEARCH_POST)
    .post('/add-post', authMiddleware, posts.ADD_POST)
    .put('/update-post/:post_id', authMiddleware, posts.UPDATE_POST)
    .delete('/delete/:post_id', authMiddleware, posts.DELETE_POST)