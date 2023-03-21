import { Route, Routes } from 'react-router-dom'
import { AddStudent } from '../Pages/AddStudent'
import { Home } from '../Pages/Home'
import { StartRoute } from '../Pages/StartRoute'
import { StudentList } from '../Pages/StudentsList'

export const Router = () =>{
    return (
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/addstudent'} element={<AddStudent/>}/>
            <Route path={'/students'} element={<StudentList/>}/>
            <Route path={'/startroute'} element={<StartRoute/>}/>
        </Routes>
    )
}