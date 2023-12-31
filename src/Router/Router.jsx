import {
    createBrowserRouter,

} from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import BookService from "../Pages/BookService/BookService";
import PrivateRoute from "./PrivateRoute";
import Bookings from "../Pages/Bookings/Bookings";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: '/login', 
                element: <Login></Login>
            }, 
            {
                path: '/signup', 
                element: <SignUp></SignUp>
            },
            {
                path: 'book/:id', 
                element: <BookService></BookService>, 
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
              },
              {
                path: 'bookings', 
                element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
              }
        ]
    },
]);


export default router;