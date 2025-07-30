import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Layout from "./layout/Layout"

function App() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [

      ]
    }
  ])
    return(<><RouterProvider router={router} /></>)
}

export default App