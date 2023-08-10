import jwt from "jsonwebtoken";
interface DecodedToken {
  userId: string;
}
function authMiddleware(handler: any) {
  return async (req: any, res: any) => {
    try {
      const token = req.headers.authorization.split(" ")[1]; // Get the token from the Authorization header
      const decodedToken = jwt.verify(
        token,
        process.env.JWT_SECRET as string
      ) as DecodedToken; // Verify the token
      req.userId = decodedToken.userId; // Add the userId to the request object
      return handler(req, res);
    } catch (error) {
      res.status(401).json({ message: "Unauthorized" });
    }
  };
}

export { authMiddleware };
