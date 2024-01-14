import React from 'react'
import ReactDOM from 'react-dom/client'

// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './App.css'

import App from './App.jsx';
import About from './pages/About';
// import Contact from './pages/Contact';
import Error from './pages/Error';
import Home from './pages/Home';
// import Projects from './pages/Projects';

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/About',
                element: <About />,
            },
            // {
            //     path: '/Contact',
            //     element: <Contact />,
            // },
            // {
            //     path: '/Projects',
            //     element: <Projects />,
            // }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
   <RouterProvider router={router} />
)
