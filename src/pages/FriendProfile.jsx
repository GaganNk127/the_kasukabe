import { useParams, Link } from 'react-router-dom'
import friends from '../data/friends'

export default function FriendProfile() {
  const { slug } = useParams()
  const friend = friends.find(f => f.slug === slug)

  if (!friend) {
    return (
      <div className="pt-10">
        <p className="text-gray-700">Friend not found.</p>
        <Link className="text-indigo-600 underline" to="/">Go back</Link>
      </div>
    )
  }

  return (
    <section className="pt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
      <aside className="lg:col-span-1 card p-6 self-start">
        <img src={friend.avatar} alt={friend.name} className="w-28 h-28 rounded-full object-cover ring-4 ring-pink-400/40 dark:ring-violet-400/40 mx-auto" />
        <h2 className="text-2xl font-bold mt-4 text-center text-gray-900 dark:text-white">{friend.name}</h2>
        <p className="text-gray-600 dark:text-gray-300 text-center">{friend.short}</p>
      </aside>

      <div className="lg:col-span-2 space-y-6">
        <header className="card p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">About {friend.name.split(' ')[0]}</h3>
          <p className="mt-2 text-gray-700 dark:text-gray-300">{friend.about}</p>
        </header>

        <blockquote className="card p-6 border-l-4 border-pink-400 dark:border-violet-400 bg-pink-50/60 dark:bg-slate-900">
          <p className="italic text-gray-800 dark:text-gray-100">“{friend.quote}”</p>
        </blockquote>

        <section className="card p-6">
          <h4 className="font-semibold mb-4">Pictures</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {friend.photos.map((url, idx) => (
              <img key={idx} src={url} alt={`${friend.name} photo ${idx+1}`} className="rounded-lg object-cover w-full h-60" />
            ))}
          </div>
        </section>
      </div>
    </section>
  )
}
