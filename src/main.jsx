import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import Layout from './Layout.jsx'
import User from './components/user/User.jsx'
import Github, { githubInfoLoader } from './components/github/Github.jsx'
import Home from './components/home/Home.jsx'
import BgColorChanger from './apps/bgColorChanger/BgColorChanger.jsx'
import CounterApp from './apps/counter/CounterApp.jsx'
import PasswordGeneratorApp from './apps/passwordGenerator/PasswordGeneratorApp.jsx'
import CurrencyConverterApp from './apps/currencyConverter/CurrencyConverterApp.jsx'

//1st way of creating router
const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Home />,
    },
    {
      element : <Layout/>,
      children : [
        {
          path : "bgColorChanger",
          element : <BgColorChanger />,
        },
        {
          path : "counter",
          element : <CounterApp />,
        },
        {
          path : "passwordGenerator",
          element : <PasswordGeneratorApp />,
        },
        {
          path : "currencyConverter",
          element : <CurrencyConverterApp />,
        },
      ]
    }
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
    <RouterProvider router={router} />
  </StrictMode>,
)
