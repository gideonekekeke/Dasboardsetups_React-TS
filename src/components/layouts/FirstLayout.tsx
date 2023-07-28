import React from "react";
import styled from "styled-components";
import { Navbar, Sidebar } from "../Blocks/FirstBlock";
import { Outlet } from "react-router-dom";

const LayoutContainer = styled.div`
	/* Your layout styles here */
	margin-top: 60px; /* To leave space for the fixed navbar */
	margin-left: 200px; /* To leave space for the fixed sidebar */
`;

const OutletContainer = styled.div`
	padding-top: 30px;
    padding-left: 20px;
 /* To match the width of the Sidebar */
`;

const FirstLayout: React.FC = () => {
	return (
		<LayoutContainer>
			<Sidebar />
			<div>
				<Navbar />
				<OutletContainer>
					<Outlet />
				</OutletContainer>
			</div>
		</LayoutContainer>
	);
};

export default FirstLayout;
