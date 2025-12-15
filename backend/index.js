import express from 'express';
import cors from 'cors';
import mongoose from "mongoose";
import router from "./Router.js";

const PORT = process.env.PORT || 4200;

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api" ,router);

const start = async () => {
    try {
        await mongoose.connect("mongodb+srv://root123:1202@authentification.rkrf5g4.mongodb.net/?appName=Authentification");
        app.listen(PORT, () => console.log("SERVER STARTED ON PORT: " + PORT));
    }
    catch (e) {
        console.log(e);
    }
}

await start();