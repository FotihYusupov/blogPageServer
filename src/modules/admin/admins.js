import { login } from "./model.js";
import { sign } from "../../utils/jwt.js";

export default {
    LOG_IN: async (req, res) => {
        const { admin_name, admin_password } = req.body;
        const foundUser = await login(admin_name, admin_password);
        if (foundUser) {
            const token = sign(foundUser.admin_id);
            res.status(200).json({
            status: 200,
            token,
            });
        } else {
            res.status(400).json({
            status: 400,
            message: "Bad request",
            });
        }
        },
}