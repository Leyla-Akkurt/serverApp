import express from 'express';
import cors from 'cors';
const app=express();
import {
    getAll,
    create,
    deleteById,
    updateById
 } from './controller.js'

app.use(express.json());
app.use(cors());

const port=3001;

app.get('/api/posts',getAll);
app.post('/api/posts',create);
app.put('/api/posts/:id',updateById);
app.delete('/api/posts/:id', deleteById);

app.listen(port,()=>console.log(`Server is running on port ${port}`));




