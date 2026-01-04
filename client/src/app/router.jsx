import { createBrowserRouter } from "react-router-dom"
import { Front } from "../pages/Front"
import { AppLayout } from "./AppLayout"
import { Home } from "../pages/Home"
import { Education } from "../pages/Education"
import { Skills } from "../pages/Skills"
import { Project } from "../pages/Project"
import { Contact } from "../pages/Contact"

export const router = createBrowserRouter([
  {
    path:'/',
    element:<Front/>,
  },
  {
    path:'/manjeet',
    element:<AppLayout/>,
    children:[
        {
          index:true,
          element:<Home/>
        },
        {
          path:'education',
          element:<Education/>
        },
        {
          path:'skills',
          element:<Skills/>
        },
        {
          path:'projects',
          element:<Project/>
        },
        {
          path:'contact',
          element:<Contact/>
        },
    ]
  }
])
