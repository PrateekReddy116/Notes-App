import mongoose from 'mongoose';

//create a schema
//model based on that schema
const noteSchema = new mongoose.Schema({
    title: {
        type:String,
        required:true,
    },
    content: {
        type:String,
        required:true,
    }
    },
    { timestamps:true } //created at and updated at
)

const Note = mongoose.model('Note',noteSchema);
export default Note;