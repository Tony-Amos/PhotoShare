import jwt from "jsonwebtoken";

export default function auth(role) {
  return (req, res, next) => {
    try {
      const token = req.headers.authorization?.split(" ")[1];
      if (!token) return res.sendStatus(401);

      const user = jwt.verify(token, process.env.JWT_SECRET);
      if (role && user.role !== role) return res.sendStatus(403);

      req.user = user;
      next();
    } catch {
      res.sendStatus(401);
    }
  };
}