import { useLoading } from './LoadingContext.jsx'

export default function Avatar({ name }) {
  const { isLoading } = useLoading()
  const initial = name ? name[0].toUpperCase() : '?'
  return <span className={isLoading ? 'avatar is-loading' : 'avatar'}>{initial}</span>
}
