import Avatar from './Avatar.jsx'

export default function UserCard({ user }) {
  return (
    <section className="user-card">
      <Avatar name={user?.name} />
      <h2>{user?.name}</h2>
    </section>
  )
}
