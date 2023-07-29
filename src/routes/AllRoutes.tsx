import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FirstLayout from "../components/layouts/FirstLayout";
import DashboardOverView from "../pages/DashboardOverView";
import SecondLayout from "../components/layouts/SecondLayout";

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

				{
					element: <SecondLayout />,
					children: [
						{
							path: "/dashboard2",
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
