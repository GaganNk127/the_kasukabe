import FriendCard from '../components/FriendCard'
import friends from '../data/friends'

export default function KasukabeHome() {
  return (
    <section className="pt-10">
      <div className="card p-8 mb-8 bg-white dark:bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-200/40 via-pink-200/30 to-transparent dark:from-violet-500/20 dark:via-blue-500/15 dark:to-transparent pointer-events-none" />
        <div className="relative">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-purple-400">Welcome to The Kasukabe</h1>
          <p className="mt-2 text-black dark:text-gray-200 max-w-2xl">A cozy, digital scrapbook celebrating our chaotic energy and cherished memories. Click a friend to view their profile.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {friends.map(f => (
          <FriendCard key={f.slug} friend={f} />
        ))}
      </div>
    </section>
  )
}
