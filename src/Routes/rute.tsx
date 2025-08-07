import { createBrowserRouter, Navigate } from "react-router-dom";
import Layouts from "../layout/Layouts";
import HomePage from "../container/pages/HomePage";
import ContactoPage from "../container/pages/Contacto";
import ServiciosPage from "../container/pages/Servicios";

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layouts/>,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: 'contacto',
				element: <ContactoPage />,
			},
			{
				path: 'servicios',
				element: <ServiciosPage />,
			},
		],
	},{

		path: '/*',
		element: <Navigate to="/" replace />,
	},
]);