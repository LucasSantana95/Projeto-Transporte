import { Route, Routes } from 'react-router-dom'
import { Home } from '../Pages/Home'

export const Router = () =>{
    return (
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/addstudent'} element={<Home/>}/>
            <Route path={'/students'} element={<Home/>}/>
            <Route path={'/startroute'} element={<Home/>}/>
        </Routes>
    )
}