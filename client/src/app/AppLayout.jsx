import { Outlet } from "react-router-dom"
import { Header } from "../components/Header"

export const AppLayout =()=>{
    return(
        <main className="pt-5">
            <Header/>
            <Outlet/>
        </main>
    )
}