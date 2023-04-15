import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import {recipesRouter} from './routes/recipes.js';
import { loginRouter } from './routes/login.js';
import { regRouter } from './routes/register.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use("/log", loginRouter);
app.use("/newuser", regRouter);
app.use("/recipes", recipesRouter);


mongoose.connect(
"mongodb+srv://avinashroy:MERNrecipes@recipes.n0xczzd.mongodb.net/recipes?retryWrites=true&w=majority"
);

 app.listen(3001, ()=> console.log("server started"));