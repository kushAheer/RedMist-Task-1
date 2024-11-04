import express from 'express';
import dotenv from 'dotenv';
import appDbContext from './Db/appDbContext.js';
import cors from 'cors';

//Routes
import productRouter from './Routes/product.routes.js';

const app = express();

dotenv.config();



app.use(cors());


app.use(express.json());

app.use('/api/products' , productRouter)

app.get('/', (req, res) => {

    res.send('Hello World');
});

app.listen(5000 , ()=>{
    appDbContext();
    console.log('Server is running on port 5000');
})
