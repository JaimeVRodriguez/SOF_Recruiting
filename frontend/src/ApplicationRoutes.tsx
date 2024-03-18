import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar.tsx";
import Application from "./components/Applicants/Application.tsx";
import Recruiter from "./components/Recruiter/Recruiter.tsx";
import MainPage from "./components/MainPage/MainPage.tsx";
import Branches from "./components/Branches/Branches.tsx";
export default function ApplicationRoutes() {
    return (
        <Routes>
            <Route path="" element={<NavBar/>}>
                <Route path="/" element={<MainPage/>}/>
                <Route path='/home' element={<MainPage/>}/>
                <Route path="/application" element={<Application/>}/>
                <Route path="/recruiter" element={<Recruiter/>}/>
                <Route path="/branches" element={<Branches/>}/>
            </Route>
        </Routes>
    )
}