import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';
import dotenv from 'dotenv';


const app = express();
dotenv.config();
// console.log(process.env) ;

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);

// const CONNECTION_URL = 'mongodb+srv://manish:Manish2002ar@memory.tchl5cg.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

// mongodb+srv://manish:<password>@atlascluster.uqscenz.mongodb.net/?retryWrites=true&w=majority
// const CONNECTION_URL ='mongodb+srv://manish:Manish2002ar@cluster0.msfhyqp.mongodb.net/?retryWrites=true&w=majority'
// https://www.mongodb.com/cloud/atlas
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

// mongoose.set('useFindAndModify', false);


// It's a deprecated now. // No longer necessary:
// mongoose.set('useFindAndModify', false);



