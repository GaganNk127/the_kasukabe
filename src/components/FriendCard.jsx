import { useNavigate } from 'react-router-dom'

export default function FriendCard({ friend }) {
  const navigate = useNavigate()
  return (
    <button onClick={() => navigate(`/friend/${friend.slug}`)} className="card text-left w-full">
      <div className="p-4 flex items-center gap-4">
        <img src={friend.avatar} alt={friend.name} className="h-14 w-14 rounded-full object-cover ring-4 ring-pink-400/40 dark:ring-violet-400/40" />
        <div>
          <h3 className="text-lg font-semibold">{friend.name}</h3>
          <p className="text-sm text-gray-600">{friend.short}</p>
        </div>
      </div>
    </button>
  )
}
