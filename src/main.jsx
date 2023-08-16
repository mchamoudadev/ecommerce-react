import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Cart from "./pages/Cart.jsx";
import Products from "./pages/Products.jsx";
import Product from "./pages/Product.jsx";
import { ShopProvider } from "./ShopContext.jsx";

const routerProvider = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				index: true,
				element: <Products />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
			{
				path: "/cart",
				element: <Cart />,
			},
			{
				path: "/products",
				element: <Products />,
			},
			{
				path: "/product-details/:id",
				element: <Product />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ShopProvider>
			<RouterProvider router={routerProvider} />
		</ShopProvider>
	</React.StrictMode>
);
