import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AllRoutes from "./routes/AllRoutes.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<AllRoutes />
		{/* <App /> */}
	</React.StrictMode>,
);
