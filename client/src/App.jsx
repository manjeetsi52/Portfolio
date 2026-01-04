import { RouterProvider } from "react-router-dom"
import { router } from "./app/router"

export const App = ()=>{

  return(
    <main className="bg-black">
    <RouterProvider router={router}/>
    </main>
  )
}