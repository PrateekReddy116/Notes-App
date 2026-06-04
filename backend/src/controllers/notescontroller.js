// const getAllnotes = (req, res) => {
//     res.status(200).send('Your goted got on get got');
// };
import Note from '../Model/Note.js';

export async function getAllnotes (_, res){
    try{
        const notes = await Note.find().sort({ createdAt: -1 });
        res.status(200).json(notes);
    }
    catch (error){
        console.error(error);
        res.status(500).json("Internal Server Error");
    }
};

export async function getnoteById(req,res){
    try {
        const note = await Note.findById(req.params.id);
        if(!note) return res.status(404).json({message:"Note not found"});
        res.status(200).json(note);
    } catch (error) {
        console.error(error);
        res.status(500).json("Internal Server Error");
    }
};


export async function createNote (req,res){
    try{
        const {title, content} = req.body;
        console.log(title, content);
        //const newNote = new Note({title, content});
        //await newNote.save() ;
        const note = new Note({title, content});
        const savedNote = await note.save();
        res.status(201).json(savedNote);
    }
    catch (error){
        console.error(error);
        res.status(500).json("Internal Server Error");
    }
     
};

export async function updateNote(req,res){
    try {
       const {title,content} =  req.body;
       const updatedNote = await Note.findByIdAndUpdate(req.params.id,{title,content},{new:true,});

        if(!updatedNote) return res.status(404).json({message:"Note not found"});

       res.status(200).json("Note Updated Successfully");
    } catch (error) {
        console.error(error);
        res.status(500).json("Internal Server Error");
    } 
};

export async function deleteNote(req,res){
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id);
        if(!deletedNote) return res.status(404).json({message:"Note not found"});
        res.status(200).json("Note Deleted Successfully");
} catch (error) {
    console.error(error);
    res.status(500).json("Internal Server Error");
        
    }
}