import { Routes, Route } from "react-router-dom"
import { Navbar } from '../Navbar'
import { HomePage, LoginPage, RegisterPage, DashboardPage } from "../pages"
import { PrivateRoute } from "./PrivateRoute"


export const AppRouter = () => {

  return <>
    <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route index element={<HomePage/>}/>
          <Route path='login' element={<LoginPage/>}/>
          <Route path='register' element={<RegisterPage/>}/>
          <Route path='dashboard' element={
            <PrivateRoute>
              <DashboardPage/>
            </PrivateRoute>
          }/>
        </Route>
    </Routes>
    </>
  
}