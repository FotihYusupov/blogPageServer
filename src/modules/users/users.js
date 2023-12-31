import { login, getProfile, signin } from "./model.js";
import { sign } from "../../utils/jwt.js";

export default {
  SIGN_IN: async (req, res) => {
    const { user_full_name, user_name, user_password } = req.body;
    const addUser = await signin(
      user_full_name,
      user_name,
      user_password
    ).catch((e) => console.log(e));
    const token = sign(addUser.user_id);
    if (addUser) {
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
  LOG_IN: async (req, res) => {
    const { user_name, user_password } = req.body;
    const foundUser = await login(user_name, user_password);
    if (foundUser) {
      const token = sign(foundUser.user_id);
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
  PROFILE: async (req, res) => {
    const { user_id } = req.headers;
    const profile = await getProfile(user_id);
    if(profile.posts[0] !== null){
      profile.posts.map((e) => (e.post_img = `${process.env.HOST}/view/${e.post_img}`)
      )
    } else {
      profile.posts = []
    }
    res.send(profile);
  },
};
