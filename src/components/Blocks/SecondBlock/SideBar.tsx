import React from "react";
import styled from "styled-components";
import { RxDashboard } from "react-icons/rx";
import { RiEBike2Line, RiListOrdered2 } from "react-icons/ri";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaMoneyBillAlt } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { BiLogOutCircle } from "react-icons/bi";
const SidebarContainer = styled.div`
	/* Your sidebar styles here */
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	width: 200px;
	background-color: #101828;
	color: white;
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

	@media screen and (max-width: 768px) {
		display: none;
	}
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
	margin-bottom: 20px;
	cursor: pointer;
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
							<RiEBike2Line />
						</Icon>
						<Nav>Delievery</Nav>
					</Hold>
					<Hold>
						<Icon>
							{" "}
							<RiListOrdered2 />
						</Icon>
						<Nav>Order</Nav>
					</Hold>
					<Hold>
						<Icon>
							{" "}
							<MdOutlineProductionQuantityLimits />
						</Icon>
						<Nav>Products</Nav>
					</Hold>
					<Hold>
						<Icon>
							{" "}
							<FaMoneyBillAlt />
						</Icon>
						<Nav>Finance</Nav>
					</Hold>
					<Hold>
						<Icon>
							{" "}
							<AiFillSetting />
						</Icon>
						<Nav>Settings</Nav>
					</Hold>

					<Hold>
						<Icon>
							{" "}
							<BiLogOutCircle />
						</Icon>
						<Nav>LogOut</Nav>
					</Hold>
				</Cont>
			</Wrapper>
		</SidebarContainer>
	);
};

export default Sidebar;
