import mongoose from 'mongoose';
import colors from 'colors';

const connectDB =  async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to MongoDB database ${conn.connection.host}`.magenta.underline);
    } catch (error) {
        console.error(`Error in MongoDB connection: ${error.message}`.bgRed.white);
        process.exit(1); // Exit with failure
    }
};

export default connectDB;
