import { createBrowserRouter } from "react-router-dom";
import Error from "../../Components/Pages/Error/Error";
import Home from "../../Components/Pages/Home/Home";
import Login from "../../Components/Pages/Login/Login";
import OrdersHistory from "../../Components/Pages/OrdersHistory/OrdersHistory";
import Pizzas from "../../Components/Pages/Pizzas/Pizzas";
import PlaceOrder from "../../Components/Pages/PlaceOrder/PlaceOrder";
import SignUp from "../../Components/Pages/SignUp/SignUp";
import Main from "../../Layouts/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
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
                path: '/pizzas',
                element: <Pizzas></Pizzas>
            },
            {
                path: '/place-order',
                element:<PlaceOrder></PlaceOrder>
            },
            {
                path: '/order-history',
                element: <OrdersHistory></OrdersHistory>
            },
            {
                path: '*',
                element: <Error></Error>
            }
        ]
    }
])