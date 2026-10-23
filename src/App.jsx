import { useEffect, useState } from 'react'
import UserCard from './UserCard.jsx'
import UserList from './UserList.jsx'

const team = [
  { id: 1, name: 'Riya' },
  { id: 2, name: 'Arjun' },
  { id: 3, name: 'Sana' },
]

function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id: 0, name: 'Ayushman' }), 1500)
  })
}

export default function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetchUser().then(setUser)
  }, [])

  return (
    <main>
      <h1>React Kolkata</h1>
      <UserCard user={user} />
      <UserList users={team} />
    </main>
  )
}
