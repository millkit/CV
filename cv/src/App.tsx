import { Suspense } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
                                                                                        
import './index.css'                                                                                        
import { Layout } from './layout/layout'                                                                                        
import { HomePage } from './pages/home-page'                                                                                        
import NotFoundPage from './pages/not-found'                                                                                        
                                                                              
const router = createBrowserRouter([                                                                                        
  {                                                                                        
    path: '/',                                                                                        
    element: <Layout />,                                                                                                  
    children: [                                                                                        
      {                                                                                        
        index: true,                                                                                        
        element: <HomePage />                                                                                        
      },
      {
        path: '*',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <NotFoundPage
              error={null}
              resetErrorBoundary={() => {}}
            />
          </Suspense>
        )
      }
    ]
  }
])

export const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
