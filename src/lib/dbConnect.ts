import mongoose from "mongoose";

type ConnectionObject = {     // optionally check for object we are getting after database connection
    isConnected?:number
}

const connection: ConnectionObject = {}

async function dbConnect(): Promise<void> {
    if (connection.isConnected) {               // safety or optimisation check for weather the db is connected or not(next js allows multiple db connection at the same time but impact on performance)
        console.log("Already connected to database");
        return
    }

    try {
        const db = await mongoose.connect(process.env.MONGODB_URI || "", {})
        // console.log(db);
        // console.log(db.connection);

        connection.isConnected = db.connections[0].readyState
 
        console.log("Databse connected successfully");
        

    } catch (error) {
        
        console.log("Database connection failed", error);
        
        process.exit()
    }
}

export default dbConnect;