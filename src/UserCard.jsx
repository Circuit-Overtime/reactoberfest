import Avatar from './Avatar.jsx'

export default function UserCard({ user, isLoading = !user }) {
  if (isLoading) {
    return (
      <section className="user-card">
        <p role="status">Loading…</p>
      </section>
    )
  }

  return (
    <section className="user-card">
      <Avatar name={user.name} />
      <h2>{user.name}</h2>
    </section>
  )
}
