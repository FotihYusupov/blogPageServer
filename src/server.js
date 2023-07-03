import express from "express";
import dotenv from "dotenv"
dotenv.config()
import fileUpload from "express-fileupload";
import routes from "./modules/routes.js";
import cors from 'cors'

const PORT = process.env.PORT || 8000
const app = express()

app.use(fileUpload())

const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) 

app.use(express.json())
app.use(routes)

app.listen(PORT, console.log(PORT))