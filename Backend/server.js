import express from 'express';
import dotenv from 'dotenv';
import appDbContext from './Db/appDbContext.js';
import cors from 'cors';
import path from 'path';
//Routes
import productRouter from './Routes/product.routes.js';

const app = express();

dotenv.config();

const __dirname = path.resolve();


app.use(cors());


app.use(express.json());

app.use('/api/products' , productRouter)

// app.get('/', (req, res) => {

//     res.send('Hello World');
// });

app.use(express.static(path.join(__dirname, '..','Frontend' , 'dist')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..','Frontend' , 'dist', 'index.html'));
});

app.listen(5000 , ()=>{
    appDbContext();
    console.log('Server is running on port 5000');
})
