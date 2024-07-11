
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Portfolio from './Components/Portfolio/Portfolio'
import Blog from './Components/Blog/Blog'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "blog",
          element: <Blog />,
        },
        {
          path: "portfolio",
          element: <Portfolio />,
        },
      ]
    }        
  ]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
        <App />
    </RouterProvider>
)
