import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    console.log("CONNECTION_STRING:", process.env.CONNECTION_STRING);

    const dB = await mongoose.connect(process.env.CONNECTION_STRING);

    console.log(
      `✅ database connected : ${dB.connection.name} ${dB.connection.host}`
    );
  } catch (error) {
    console.log(`❌ database error : ${error.message}`);
    process.exit(1);
  }
};

export default dbConnect;