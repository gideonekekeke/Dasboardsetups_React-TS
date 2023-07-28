import React from "react";
import styled from "styled-components";
import { RxDashboard } from "react-icons/rx";
const SidebarContainer = styled.div`
	/* Your sidebar styles here */
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	width: 200px;
	background-color: #101828;
	color: white;
`;

const Wrapper = styled.div`
	margin-top: 30px;
	margin-left: 40px;
`;

const Nav = styled.div``;

const Icon = styled.div`
	margin-right: 10px;
	margin-top: 5px;
`;

const Hold = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 30px;
`;

const Cont = styled.div`
	margin-top: 45px;
`;

const Sidebar: React.FC = () => {
	return (
		<SidebarContainer>
			<Wrapper>
				<div>logo</div>
				<Cont>
					<Hold>
						<Icon>
							<RxDashboard />
						</Icon>
						<Nav>Dashboard</Nav>
					</Hold>
					<Hold>
						<Icon>
							{" "}
							<RxDashboard />
						</Icon>
						<Nav>Dashboard</Nav>
					</Hold>
					<Hold>
						<Icon>
							{" "}
							<RxDashboard />
						</Icon>
						<Nav>Dashboard</Nav>
					</Hold>
					<Hold>
						<Icon>
							{" "}
							<RxDashboard />
						</Icon>
						<Nav>Dashboard</Nav>
					</Hold>
					<Hold>
						<Icon>
							{" "}
							<RxDashboard />
						</Icon>
						<Nav>Dashboard</Nav>
					</Hold>
					<Hold>
						<Icon>
							{" "}
							<RxDashboard />
						</Icon>
						<Nav>Dashboard</Nav>
					</Hold>
				</Cont>
			</Wrapper>
		</SidebarContainer>
	);
};

export default Sidebar;
