import express from "express";
import graphlHTTP from "express-graphql";
import cors from 'cors'
import mongoose from "mongoose";
import schema from './schema'

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/note_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const app = express();
const PORT = 4300;
app.use(cors())
app.get("/", (req, res) => {
    res.json({
        message: "Note API v1"
    });
});
app.use(
    "/graphql",
    graphlHTTP({
        schema: schema,
        graphiql: true
    })
);
app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
});