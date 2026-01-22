import dotenv from 'dotenv';
dotenv.config();

export const credentials = {
    validUser: {
       username: process.env.USERNAME,
       password: process.env.TEST_USERNAME
        // apiKey: process.env.API_KEY
    }
};