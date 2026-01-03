import { createBrowserRouter } from "react-router-dom"
import { Front } from "../pages/Front"
import { AppLayout } from "./AppLayout"

export const router = createBrowserRouter([
  {
    path:'/',
    element:<Front/>,
  },
  {
    path:'/manjeet',
    element:<AppLayout/>,
    children:[
        {}
    ]
  }
])
