
const registValidation = async (username: string, password: string, email: string) => {
    if (username === undefined) {
        return {
            code: 400,
            message: "username is required",
        };
    }

    if (password === undefined) {
        return {
            code: 400,
            message: "password is required",
        };
    }

    if (email === undefined) {
        return {
            code: 400,
            message: "email is required",
        };
    }
    return null;
}

const loginValidation = async (username: string, password: string) => {
    if (username === undefined) {
        return {
            code: 400,
            message: "username is required",
        };
    }

    if (password === undefined) {
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