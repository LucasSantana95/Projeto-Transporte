import { Route, Routes } from 'react-router-dom'
import { AddStudent } from '../Pages/AddStudent'
import { Home } from '../Pages/Home'
import { LoginPage } from '../Pages/Login'
import { StartRoute } from '../Pages/StartRoute'
import { StudentsList } from '../Pages/StudentsList'

export const Router = () =>{
    return (
        <Routes>
            <Route path={'/'} element={<LoginPage/>}/>
            <Route path={'/home'} element={<Home/>}/>
            <Route path={'/addstudent'} element={<AddStudent/>}/>
            <Route path={'/students'} element={<StudentsList/>}/>
            <Route path={'/startroute'} element={<StartRoute/>}/>
        </Routes>
    )
}