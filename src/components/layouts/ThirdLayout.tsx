import React, { useState } from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Sidebar from "../Blocks/ThirdBlock/SideBar";
import Navbar from "../Blocks/ThirdBlock/NavBar";

const LayoutContainer = styled.div<{ sidebarExpanded: boolean }>`
	/* Your layout styles here */
	margin-top: 60px; /* To leave space for the fixed navbar */
	margin-left: ${(props) => (props.sidebarExpanded ? "200px" : "40px")};

	@media screen and (max-width: 768px) {
		margin-left: 0;
	}
`;

const OutletContainer = styled.div<{ sidebarExpanded: boolean }>`
	padding-top: 30px;
	padding-left: 30px;
`;

const ThirdLayout: React.FC = () => {
	const [sidebarExpanded, setSidebarExpanded] = useState(false);

	const handleSidebarToggle = () => {
		setSidebarExpanded((prevExpanded) => !prevExpanded);
	};
	return (
		<LayoutContainer sidebarExpanded={sidebarExpanded}>
			<Sidebar expanded={sidebarExpanded} onToggle={handleSidebarToggle} />
			<div>
				<Navbar sidebarExpanded={sidebarExpanded} />
				<OutletContainer sidebarExpanded={sidebarExpanded}>
					<Outlet />
				</OutletContainer>
			</div>
		</LayoutContainer>
	);
};

export default ThirdLayout;
