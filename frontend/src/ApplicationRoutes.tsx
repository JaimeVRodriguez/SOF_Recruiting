import { Route, Routes } from "react-router-dom"
import AppNavbar from "./app-navbar/view/AppNavbar.tsx";
import CreateApplication from "./application/view/CreateApplication.tsx";
import Recruiter from "./recruiter/view/Recruiter.tsx";
import HomePage from "./home/view/HomePage.tsx";
import Branches from "./branches/view/Branches.tsx";
export default function ApplicationRoutes() {
    return (
        <Routes>
            <Route path="" element={<AppNavbar/>}>
                <Route path="/" element={<HomePage/>}/>
                <Route path='/home' element={<HomePage/>}/>
                <Route path="/application" element={<CreateApplication/>}/>
                <Route path="/recruiter" element={<Recruiter/>}/>
                <Route path="/branches" element={<Branches/>}/>
            </Route>
        </Routes>
    )
}