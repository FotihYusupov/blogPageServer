import { Router } from "express";
import categories from "./categories.js";

const categoriesRoute = Router()

export default categoriesRoute
    .get('/categories', categories.GET_CATEGORIES)
    .get('/category/:id', categories.BY_CATEGORY)