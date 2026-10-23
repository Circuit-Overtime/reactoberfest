import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import UserCard from './UserCard.jsx'

describe('UserCard', () => {
  it("renders the user's name", () => {
    render(<UserCard user={{ id: 1, name: 'Riya' }} />)
    expect(screen.getByRole('heading', { name: 'Riya' })).toBeInTheDocument()
  })
})
