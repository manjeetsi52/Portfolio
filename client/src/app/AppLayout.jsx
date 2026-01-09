import { Outlet } from "react-router-dom"
import { Header } from "../components/Header"
import { Fragment } from "react"

export const AppLayout =()=>{
    return(
        <main className="relative">
            <Header/>
            <Outlet/>
        </main>
    )
}