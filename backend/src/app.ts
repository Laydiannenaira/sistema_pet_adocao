import express from "express";
import {PetsRouter} from "./routes/pets.routes";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const petsRouter = new PetsRouter();
app.use("/pets", petsRouter.router);

app.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
});
