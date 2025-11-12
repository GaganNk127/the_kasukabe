import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import KasukabeHome from './pages/KasukabeHome'
import FriendProfile from './pages/FriendProfile'
import SharedGallery from './pages/SharedGallery'

export default function App() {
  return (
    <div className="min-h-screen bg-hero-gradient dark:bg-hero-gradient-dark">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 pb-12">
        <Routes>
          <Route path="/" element={<KasukabeHome />} />
          <Route path="/friend/:slug" element={<FriendProfile />} />
          <Route path="/gallery" element={<SharedGallery />} />
        </Routes>
      </main>
    </div>
  )
}
