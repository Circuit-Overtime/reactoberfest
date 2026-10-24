import { createContext, useContext } from 'react'

export const LoadingContext = createContext({ isLoading: false })

export function LoadingProvider({ isLoading, children }) {
  return (
    <LoadingContext.Provider value={{ isLoading }}>
      {children}
    </LoadingContext.Provider>
  )
}

export function useLoading() {
  return useContext(LoadingContext)
}
