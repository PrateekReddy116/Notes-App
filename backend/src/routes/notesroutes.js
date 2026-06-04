import express from 'express';
const router = express.Router();
import { updateNote,createNote,getAllnotes, deleteNote, getnoteById} from '../controllers/notescontroller.js';

router.get('/', getAllnotes); 
router.get('/:id', getnoteById);
router.post('/', createNote);
router.put('/:id', updateNote);
router.delete('/:id', deleteNote);
export default router;

