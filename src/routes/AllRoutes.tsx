import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FirstLayout from "../components/layouts/FirstLayout";
import DashboardOverView from "../pages/DashboardOverView";

const AllRoutes = () => {
	const Index = createBrowserRouter([
		{
			path: "/",
			children: [
				{
					element: <FirstLayout />,
					children: [
						{
							path: "/",
							children: [
								{
									index: true,
									element: <DashboardOverView />,
								},
							],
						},
					],
				},
			],
		},
	]);

	return <RouterProvider router={Index} />;
};

export default AllRoutes;
