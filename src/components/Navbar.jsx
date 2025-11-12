import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 dark:bg-slate-900/70 backdrop-blur border-b border-gray-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="inline-block h-3 w-3 rounded-full bg-indigo-500 dark:bg-pink-500"></span>
          <span className="font-semibold text-lg text-gray-900 dark:text-white">The Kasukabe</span>
        </Link>
        <nav className="flex items-center gap-4">
          <NavLink to="/" end className={({isActive})=>`px-3 py-1 rounded-md transition-colors ${isActive? 'bg-gray-100 text-gray-900 dark:bg-slate-800 dark:text-gray-100':'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'}`}>
            Home
          </NavLink>
          <NavLink to="/gallery" className={({isActive})=>`px-3 py-1 rounded-md transition-colors ${isActive? 'bg-gray-100 text-gray-900 dark:bg-slate-800 dark:text-gray-100':'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'}`}>
            Shared Gallery
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
