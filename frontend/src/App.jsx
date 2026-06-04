import { Route, Routes } from 'react-router'
import Homepage from './pages/Homepage.jsx'
import CreatePage from './pages/CreatePage'
import NoteDetailPage from './pages/NoteDetailPage.jsx'
import toast from 'react-hot-toast'
const App = () => {
  return (
    <div>
      <div data-theme="forest">
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<Homepage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
        {/* Add more routes as needed */}

      </Routes>
      </div>
    </div>
  )
}

export default App