import {createBrowserRouter} from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import Home from "../pages/HomePage/Home"
import SignIn from "../pages/signInPage/SignIn"
import Login from "../pages/LoginPage/Login"

const routes = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:[
            {path:"/", element:<Home />},
            {path:"signIn", element:<SignIn />},
            {path:"login", element:<Login />}
        ]
    }
])

export default routes