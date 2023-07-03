import { verify } from "../utils/jwt.js";

function authMiddleware(req, res, next) {
  const { token } = req.headers;
  if (token) {
    const user_id = verify(token, "1Q2W3E4R5T");
    if (user_id) {
      req.headers.user_id = user_id;
      next();
    }
  } else {
    res.status(404).json({
        status: 404,
        message: 'Token is not defined'
    })
}
}

export default authMiddleware;
