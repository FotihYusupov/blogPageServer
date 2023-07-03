import { Router } from "express";
import users from "./users.js";
import authMiddleware from '../../middlewares/auth.middleware.js'

const usersRoute = Router()

export default usersRoute
    .post('/sign-in', users.SIGN_IN)
    .post('/log-in', users.LOG_IN)
    .get('/profile', authMiddleware, users.PROFILE)