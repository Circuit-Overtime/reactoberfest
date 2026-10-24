import Avatar from './Avatar.jsx'
import { useLoading } from './LoadingContext.jsx'

export default function UserList({ users }) {
  const { isLoading } = useLoading()

  return (
    <ul className={isLoading ? 'user-list is-loading' : 'user-list'}>
      {users.map((user) => (
        <li key={user.id}>
          <Avatar name={user.name} />
          {user.name}
        </li>
      ))}
    </ul>
  )
}
