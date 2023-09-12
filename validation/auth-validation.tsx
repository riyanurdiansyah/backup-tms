import jwt from 'jsonwebtoken';

const checkJWT = async (token: string) => {
    const secretKey = process.env.JWT_SECRET_KEY as string;
    try {

        const decodedToken = jwt.verify(token, secretKey);

        return null;
    } catch (err) {
        return {
            code: 404,
            message: "Unauthorized : Invalid token",
        };
    }
}

export default {
    checkJWT
}