import { Outlet } from "react-router-dom"
import { Footer } from "../components/header-footer/Footer"
import { Header } from "../components/header-footer/Header"

export const AppLayout =()=>{
    return(
        <main className="relative">
            <Header/>
            <Outlet/>
            <Footer/>
        </main>
    )
}