import { Router } from "express";
import usersRoute from "./users/routes.js";
import postsRoutes from "./posts/routes.js"
import categoriesRoute from "./categories/routes.js"
import adminsRoute from "./admin/routes.js"

const routes = Router();

export default routes
    .use(usersRoute)
    .use(postsRoutes)
    .use(categoriesRoute)
    .use(adminsRoute)