import { Router } from "express";
import usersRoute from "./users/routes.js";
import postsRoutes from "./posts/routes.js"
import categoriesRoute from "./categories/routes.js"

const routes = Router();

export default routes
    .use(usersRoute)
    .use(postsRoutes)
    .use(categoriesRoute)