export default function Avatar({ name }) {
  const initial = name ? name[0].toUpperCase() : '?'
  return <span className="avatar">{initial}</span>
}
