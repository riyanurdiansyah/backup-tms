import { User } from "@prisma/client";

const registValidation = async (user: User) => {
    if (user.username === undefined) {
        return {
            code: 400,
            message: "username is required",
        };
    }

    if (user.password === undefined) {
        return {
            code: 400,
            message: "password is required",
        };
    }

    if (user.email === undefined) {
        return {
            code: 400,
            message: "email is required",
        };
    }

    if (user.role_id === undefined) {
        return {
            code: 400,
            message: "role_id is required",
        };
    }
    return null;
}

const loginValidation = async (user: User) => {
    if (user.username === undefined) {
        return {
            code: 400,
            message: "username is required",
        };
    }

    if (user.password === undefined) {
        return {
            code: 400,
            message: "password is required",
        };
    }

    return null;
}

export default {
    registValidation,
    loginValidation
}