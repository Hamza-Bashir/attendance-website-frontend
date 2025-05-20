import {createBrowserRouter} from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import Home from "../pages/HomePage/Home"
import SignIn from "../pages/signInPage/SignIn"
import Login from "../pages/LoginPage/Login"
import UserDashboard from "../pages/UserDashboard/UserDashboard"
import CheckIn from "../pages/CheckInPage/CheckIn"
import CheckOut from "../pages/CheckOutPage/CheckOut"

const routes = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:[
            {path:"/", element:<Home />},
            {path:"signIn", element:<SignIn />},
            {path:"login", element:<Login />},
            
        ]
    },
    {
        path:"/dashboard", element:<UserDashboard/>,
        children:[
            {
                path:"checkin",
                element:<CheckIn/>
            }, 
            {
                path:"checkout",
                element:<CheckOut/>
            }
        ]
    }
])

export default routes