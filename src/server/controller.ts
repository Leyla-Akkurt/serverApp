import { Request ,Response} from "express";
import {v4 as uuidv4} from 'uuid';


type Note={
    id:string,
    text:string,
    timestamp:number
}

let notes=[
    {
        id: uuidv4(),
        text: "Text 1 here",
        timestamp: 1676229451520
    },
    {
        id: uuidv4(),
        text: "Text 2 here",
        timestamp: 1676229451540
    },

];

const getAll=(req:Request,res:Response)=>{
    res.status(200).json(notes);
}

const create=(req:Request,res:Response)=>{
    const note=req.body;
    console.log(note)
    notes=[...notes, { id:uuidv4(), text:note.text, timestamp:Date.now()}]
    res.status(201).json({msg: 'note was created'});
}

const updateById=(req:Request,res:Response)=>{
    const {id}=req.params;
    const newText=req.body;
    //notes=notes.map(note=>note.id===id ? [...notes, {...note,text: newText.text}]:notes);
   notes.forEach(note=>note.id===id ? note.text=newText.text: null);
    res.status(200).json({msg:'updated'});

}
const deleteById=(req:Request,res:Response)=>{
    const {id}=req.params;
    console.log(id);
  notes=notes.filter(note=>note.id !==id );
  res.status(200).json({msg: 'deleted'});
}


export {
    getAll,
    create,
    deleteById,updateById
}
