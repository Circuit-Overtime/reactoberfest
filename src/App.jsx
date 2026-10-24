import UserCard from './UserCard.jsx'
import UserList from './UserList.jsx'
import { LoadingProvider } from './LoadingContext.jsx'
import { useAsyncState } from './hooks/useAsyncState.js'
import './index.css'

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
  const { data: user, isLoading } = useAsyncState(fetchUser)

  return (
    <LoadingProvider isLoading={isLoading}>
      <main>
        <h1>React Kolkata</h1>
        <UserCard user={user} />
        <UserList users={team} />
      </main>
    </LoadingProvider>
  )
}
