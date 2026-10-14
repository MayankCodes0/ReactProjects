import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import Layout from './Layout.jsx'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import ContactUs from './components/contact/ContactUs.jsx'
import User from './components/user/User.jsx'
import Github, { githubInfoLoader } from './components/github/Github.jsx'

//1st way of creating router
const router = createBrowserRouter(
  [
    {
      path : '/',
      element : <Layout />,
      children : [
        {
          path : "",
          element : <Home />,
        },
        {
          path : "about",
          element : <About />,
        },
        {
          path : "contact",
          element : <ContactUs />,
        },
        {
          path : "user/:userId",
          element : <User />,
        },
        {
          path : "github",
          element : <Github />,
          loader : githubInfoLoader,
        },
      ]
    },
  ]
)

// 2nd way to create router
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//       <Route path="" element={<Home />}/>
//       <Route path="about" element={<About />}/>
//       <Route path="contact" element={<ContactUs />}/>
//       <Route path="user/:userId" element={<User/>} />
//       <Route path="github" loader=githubInfoLoader element={<Github />} />
//     </Route>
//   )
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
