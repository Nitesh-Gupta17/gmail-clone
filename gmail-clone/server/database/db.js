import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD; 

const Connection = () => {
    // const DB_URI = `mongodb://${USERNAME}:${PASSWORD}@ac-8j16moz-shard-00-00.zwycdvh.mongodb.net:27017,ac-8j16moz-shard-00-01.zwycdvh.mongodb.net:27017,ac-8j16moz-shard-00-02.zwycdvh.mongodb.net:27017/?ssl=true&replicaSet=atlas-usw39h-shard-0&authSource=admin&retryWrites=true&w=majority`;
    // const DB_URI='mongodb://${USERNAME}:${PASSWORD}@ac-kkqccuo-shard-00-00.9lhwher.mongodb.net:27017,ac-kkqccuo-shard-00-01.9lhwher.mongodb.net:27017,ac-kkqccuo-shard-00-02.9lhwher.mongodb.net:27017/?ssl=true&replicaSet=atlas-p7tmd6-shard-0&authSource=admin&retryWrites=true&w=majority&appName=gmailclone'
    const DB_URI='mongodb+srv://newuser:hello123@gmailclone.9lhwher.mongodb.net/'
    try {
        // mongoose.connect(DB_URI, { useNewUrlParser: true });
        mongoose.connect(DB_URI);
        mongoose.set('strictQuery', false);
        console.log('Database connected sucessfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message)
    }
}

export default Connection;