import { createBrowserRouter } from "react-router-dom";
import AddToCartPage from "./pages/AddToCartPage";
import AllProductsPage from "./pages/AllProductsPage";
import CheckoutPage from "./pages/CheckoutPage";
import HomePage from "./pages/HomePage";
import OrderTrackingPage from "./pages/OrderTrackingPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/all",
        element: <AllProductsPage />
    },
    {
        path: "/products/:id",
        element: <AddToCartPage />
    },
    {
        path: "/checkout",
        element: <CheckoutPage />
    },
    {
        path: "/orders/:id",
        element: <OrderTrackingPage />
    }
])