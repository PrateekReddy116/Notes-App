import { PenSquareIcon, Trash2Icon } from 'lucide-react';
import {Link}   from 'react-router';
import api from '../lib/axios';
import toast from 'react-hot-toast';
const NoteCard = ({note,setNotes}) => {
  return (
    <Link to={`/note/${note._id}`}
        className='card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-base-200 group overflow-hidden'>
         <div className = 'card-body p-6'>
            <h3 className='card-title text-lg font-bold text-base-content mb-2 group-hover:text-primary transition-colors'>{note.title}</h3>
            <p className='text-base-content/70 line-clamp-3 text-sm'>{note.content}</p>
            <div className = 'card-actions justify-between items-center mt-4 pt-4 border-t border-base-200'>
               <span className = 'text-xs font-medium text-base-content/50'>
               {new Date(note.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
                </span>
                <div className = 'flex items-center gap-2'>
                    <div className='btn btn-ghost btn-sm btn-circle text-base-content/70 hover:text-primary transition-colors'>
                        <PenSquareIcon className='size-4' />
                    </div>
                    <button 
                        className = "btn btn-ghost btn-sm btn-circle text-base-content/70 hover:text-error transition-colors z-20"
                        onClick={async (e) => {
                            e.preventDefault(); // get rid of the navigation behaviour
                            e.stopPropagation();

    if (!window.confirm("Are you sure you want to delete this note?")) return;

    try {
      await api.delete(`/notes/${note._id}`);
      setNotes((prev) => prev.filter((n) => n._id !== note._id)); // get rid of the deleted one
      toast.success("Note deleted successfully");
    } catch (error) {
      console.log("Error in handleDelete", error);
      toast.error("Failed to delete note");
    }
                        }}
                    >
                        <Trash2Icon className='size-4' />
                    </button>
                </div>
            </div>
         </div>   
    </Link>
  )
};
export default NoteCard;