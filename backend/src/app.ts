import express from "express";
import 'dotenv/config'

import cors from 'cors';


import {PetsRouter} from "./routes/pets.routes";
import { AdoptersRouter } from "./routes/adopters.routes";
import { AdoptionsRouter } from "./routes/adoptions.routes";

const app = express();
app.use(cors());
const port = process.env.PORT || 3000;

app.use(express.json());

const petsRouter = new PetsRouter();
app.use("/pets", petsRouter.router);

app.use("/adopters", new AdoptersRouter().router);
app.use("/adoptions", new AdoptionsRouter().router);

app.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
});
