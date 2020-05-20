import jwt from "jsonwebtoken";
import privateKey from "./jwtRS256";
import publicKey from "./jwtRS256.pub";

export const verifyJWT = (token) =>
  jwt.verify(token, publicKey, {
    algorithms: ["RS256"],
  });

export const getBearerToken = (req) => {
  const { token } = req.cookies;
  if (!token) {
    throw new Error("No authorization");
  }
  return token;
};

export const verifyJWTFromRequest = (req) => {
  const token = getBearerToken(req);
  return verifyJWT(token);
};

export const signJWT = (payload, options = {}) => {
  const { expiresIn = "2 days" } = options;
  return jwt.sign(payload, privateKey, {
    expiresIn,
    issuer: "bizzi.vn",
    audience: "bizzi.vn",
    algorithm: "RS256",
  });
};
