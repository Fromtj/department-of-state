import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Layout from "./layout/Layout"
import Home from "./pages/home/Home"

function App() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
       {
        index: true,
        element: <Home />,
       }
      ]
    }
  ])
    return(<><RouterProvider router={router} /></>)
}

export default App