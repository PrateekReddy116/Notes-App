import Navbar from '../components/Navbar'
import {useEffect, useState} from "react"
import RateLimitedUI from '../components/RateLimitedUI'
  import axios from 'axios';
import toast from 'react-hot-toast';
import NoteCard from '../components/NoteCard';
import NotesNotFound from '../components/NotesNotFound';
const Homepage = () => {
  const [isRateLimited,setIsRateLimited ] = useState(false);
  const [notes,setNotes] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axios.get('http://localhost:5001/api/notes');
        setNotes(res.data);
        setIsRateLimited(false);
        console.log(res.data);
    }catch (error) {
      console.log("Error fetching notes:", error);
      console.log(error);
      if (error.response ?.status === 429) {
        setIsRateLimited(true);
      } else {
        toast.error("An error occurred while fetching notes.");
      }
    }
    finally {
      setLoading(false);
    }
  }
    fetchNotes();
  },[]);

  return (
    <div className='min-h-screen bg-base-200/30'>
      <Navbar />
      {isRateLimited && <RateLimitedUI />}
      <div className='max-w-7xl mx-auto p-4 mt-6'>
        {loading && (
          <div className='flex justify-center items-center py-20'>
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        )}
        
        {notes.length === 0 && !isRateLimited && <NotesNotFound />}

        {notes.length >0 && !isRateLimited && (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {notes.map((note) => (
              <NoteCard key={note._id} note={note} setNotes={setNotes} />
            ))}

          </div>
        )}
      </div>
    </div>
    )
}

export default Homepage