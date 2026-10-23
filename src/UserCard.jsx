import Avatar from './Avatar.jsx'
import { useLoading } from './LoadingContext.jsx'

export default function UserCard({ user }) {
  const { isLoading } = useLoading()

  return (
    <section className={isLoading ? 'user-card is-loading' : 'user-card'}>
      <Avatar name={user?.name} />
      <h2>{isLoading ? 'Loading' : user?.name}</h2>
    </section>
  )
}
