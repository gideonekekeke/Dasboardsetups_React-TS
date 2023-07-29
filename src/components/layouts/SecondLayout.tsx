import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Sidebar from "../Blocks/SecondBlock/SideBar";
import Navbar from "../Blocks/SecondBlock/NavBar";
import ProfileBar from "../Blocks/SecondBlock/ProfileBar";

const LayoutContainer = styled.div`
	/* Your layout styles here */
	margin-top: 60px; /* To leave space for the fixed navbar */
	margin-left: 200px; /* To leave space for the fixed sidebar */

	@media screen and (max-width: 768px) {
		margin-left: 0;
	}
`;

const OutletContainer = styled.div`
	padding-top: 30px;
	padding-left: 20px;

	/* To match the width of the Sidebar */
`;

const SecondLayout: React.FC = () => {
	return (
		<LayoutContainer>
			<Sidebar />
            <ProfileBar  />
			<div>
				<Navbar />
				<OutletContainer>
					<Outlet />
				</OutletContainer>
			</div>
		</LayoutContainer>
	);
};

export default SecondLayout;
