import express from "express";
import bodyParser from "body-parser";

const app: express.Application = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(8080);
