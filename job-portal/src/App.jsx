
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { Button } from './components/ui/button'
import AppLayout from './layouts/AppLayout'
import Landing from './pages/Landing'
import { Children } from 'react'
import Onboarding from './pages/Onboarding'
import SavedJobs from './pages/SavedJobs'
import JobListing from './pages/JobListing'
import MyJobs from './pages/MyJobs'
import PostJob from './pages/PostJob'
import JobPage from './pages/JobPage'
import { ThemeProvider } from "@/components/theme-provider"

function App() {

  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: '/',
          element: <Landing />,
        },
        {
          path: '/onboarding',
          element: <Onboarding />,
        },
        {
          path: '/jobs',
          element: <JobListing />,
        },
        {
          path: '/job/:id',
          element: <JobPage />,
        },
        {
          path: '/saved-job',
          element: <SavedJobs />,
        },
        {
          path: '/post-job',
          element: <PostJob />,
        },
        {
          path: '/my-job',
          element: <MyJobs />,
        },


      ]
    }
  ])


  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>



    </>
  )
}

export default App
