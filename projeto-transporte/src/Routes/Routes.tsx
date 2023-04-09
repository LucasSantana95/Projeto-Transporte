import { Route, Routes } from 'react-router-dom'
import { AddStudent } from '../Pages/AddStudent'
import { Home } from '../Pages/Home'
import { LoginPage } from '../Pages/Login'
import { SignInPage } from '../Pages/SignIn'
import { StartRoutePage } from '../Pages/StartRoute'
import { StudentsList } from '../Pages/StudentsList'
import { AttendingStudentsPage } from '../Pages/AttendingStudents'

export const Router = () =>{
    return (
        <Routes>
            <Route path={'/'} element={<LoginPage/>}/>
            <Route path={'/signin'} element={<SignInPage/>}/>
            <Route path={'/home'} element={<Home/>}/>
            <Route path={'/addstudent'} element={<AddStudent/>}/>
            <Route path={'/students'} element={<StudentsList/>}/>
            <Route path={'/startroute'} element={<StartRoutePage/>}/>
            <Route path={'/attendingstudents'} element={<AttendingStudentsPage/>}/>
        </Routes>
    )
}