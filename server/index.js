const express = require("express")
const mongoose = require("mongoose")
const config = require("config")
const authRouter = require("./routes/authRouter")
const corsMiddleware = require("./middleware/corsMiddleware")

const app = express();
const PORT = config.get('serverPort');

app.use(corsMiddleware)
app.use(express.json());

app.use("/api/auth", authRouter)

const start = async () => {
    try {
        await mongoose.connect(config.get("dbUrl"))

        app.listen(PORT, () => {
            console.log(`server started on ${PORT}`);
        })
    } catch (e) {
        console.dir(e);
    }
}

start();