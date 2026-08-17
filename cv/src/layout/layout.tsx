import { ErrorBoundary } from 'react-error-boundary'
import { Outlet } from 'react-router-dom'

import { Header } from './header'
import NotFoundPage from '@/pages/not-found'

export const Layout = () => {
  return (
    <ErrorBoundary FallbackComponent={NotFoundPage}>
      <Header />
      <main>
        <Outlet />
      </main>
    </ErrorBoundary>
  )
}
