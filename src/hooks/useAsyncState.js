import { useEffect, useState } from 'react'

export function useAsyncState(asyncFn, deps = []) {
  const [state, setState] = useState({ data: null, isLoading: true, error: null })

  useEffect(() => {
    let cancelled = false
    setState((prev) => ({ ...prev, isLoading: true }))
    asyncFn()
      .then((data) => !cancelled && setState({ data, isLoading: false, error: null }))
      .catch((error) => !cancelled && setState({ data: null, isLoading: false, error }))
    return () => {
      cancelled = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return state
}
