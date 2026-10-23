import Avatar from './Avatar.jsx'

export default function UserList({ users }) {
  return (
    <ul className="user-list">
      {users.map((user) => (
        <li key={user.id}>
          <Avatar name={user.name} />
          {user.name}
        </li>
      ))}
    </ul>
  )
}
