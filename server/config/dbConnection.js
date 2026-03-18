import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    console.log("CONNECTION_STRING:", process.env.CONNECTION_STRING);
    const CONNECTION_STRING="mongodb+srv://abhishekrathore94500_db_user:admin@cluster0.l3cf7de.mongodb.net/UserAuth?appName=Cluster0"

    const dB = await mongoose.connect(CONNECTION_STRING);

    console.log(
      `✅ database connected : ${dB.connection.name} ${dB.connection.host}`
    );
  } catch (error) {
    console.log(`❌ database error : ${error.message}`);
    process.exit(1);
  }
};

export default dbConnect;