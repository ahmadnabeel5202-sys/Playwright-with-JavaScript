import dotenv from 'dotenv';
dotenv.config();

export const credentials = {
    validUser: {
        username: process.env.Test_Username,
        password: process.env.Test_Password,
        // apiKey: process.env.API_KEY
    }
};