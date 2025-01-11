import mongoose from 'mongoose';

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Database is connected");
  } catch (error) {
    console.error(error.message); 
    // Consider throwing the error to halt the application if the connection fails:
    // throw error;
  }
}

export default connectDB;