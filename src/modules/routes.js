import { Router } from "express";
import usersRoute from "./users/routes.js";
import postsRoutes from "./posts/routes.js"

const routes = Router();

export default routes
    .use(usersRoute)
    .use(postsRoutes)