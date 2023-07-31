import React from "react";
import styled, { keyframes } from "styled-components";
import { RxDashboard } from "react-icons/rx";
import { RiEBike2Line, RiListOrdered2 } from "react-icons/ri";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaMoneyBillAlt } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { BiLogOutCircle } from "react-icons/bi";

const expandSidebarAnimation = keyframes`
  0% {
    width: 50px;
  }
  100% {
    width: 200px;
  }
`;

const shrinkSidebarAnimation = keyframes`
  0% {
    width: 200px;
  }
  100% {
    width: 50px;
  }
`;

const Nav = styled.div`
	display: none;
`;

const SidebarContainer = styled.div`
	/* Your sidebar styles here */
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	width: 50px;
	background-color: #101828;
	color: white;
	overflow: hidden;

	@media screen and (max-width: 768px) {
		display: none;
	}

	&:hover {
		animation: ${expandSidebarAnimation} 0.3s forwards;

		${Nav} {
			display: block;
		}
	}

	&:not(:hover) {
		animation: ${shrinkSidebarAnimation} 0.3s forwards;
	}
`;

const Wrapper = styled.div`
	margin-top: 30px;
	/* margin-left: 40px; */
	margin-left: 20px;
`;

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

interface Iprops {
	expanded: boolean;
	onToggle: () => void;
}

const Sidebar: React.FC<Iprops> = ({ onToggle }) => {
	return (
		<SidebarContainer
			onMouseEnter={() => onToggle()}
			onMouseLeave={() => onToggle()}
			
			>
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
