import { Router } from "express";
import admin from "./admins.js";

const adminsRoute = Router()

export default adminsRoute
    .post('/admin/log-in', admin.LOG_IN)