import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import cors from 'cors';
import 'dotenv/config';

const db = new pg.Client({
    user: process.env.PG_USER,
    host: "localhost",
    database: "test",
    password: process.env.PG_PASS,
    port: process.env.PG_PORT,
});

const app = express();
const PORT = process.env.PORT || 3000;

db.connect();

let data = [];
db.query("SELECT * FROM testdata", (err, res) => {
    if (err) {
        console.error("Error executing query: ", err.stack);
    } else {
        data = res.rows;
    }
    db.end();
})

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// GET data
app.get("/api/data", (req, res) => {
    console.log("Data requested...");
    res.json({data});
});

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
})