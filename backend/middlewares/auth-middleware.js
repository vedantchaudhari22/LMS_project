import jwt from 'jsonwebtoken';

const verifyToken = (token, secretKey) => {
    return jwt.verify(token, secretKey)
}

const authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader) {
        return res.status(401).json({
            success: false,
            message: "User Is Not Authenticated"
        })
    }

    const token = authHeader.split(" ")[1];

    const payload = verifyToken(token, process.env.JWT_SECRET);

    req.user = payload;

    next();
}

export default authenticate;