import { createBrowserRouter, Navigate } from "react-router-dom";
import AddToCartPage from "./pages/AddToCartPage";
import AllProductsPage from "./pages/AllProductsPage";
import CheckoutPage from "./pages/CheckoutPage";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import NewProductsPage from "./pages/NewProductsPage";
import NotFoundPage from "./pages/NotFoundPage";
import OrderTrackingPage from "./pages/OrderTrackingPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "/all",
                element: <AllProductsPage />
            },
            {
                path: "/new",
                element: <NewProductsPage />
            },
            {
                path: "/products/:id",
                element: <AddToCartPage />
            },
            {
                path: "/orders/:id",
                element: <OrderTrackingPage />
            }
        ]

    },
    {
        path: "/checkout",
        element: <CheckoutPage />
    },
    {
        path: "*",
        element: <NotFoundPage />
    }

])