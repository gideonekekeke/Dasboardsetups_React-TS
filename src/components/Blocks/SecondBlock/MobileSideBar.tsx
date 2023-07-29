import React from "react";
import styled, { keyframes } from "styled-components";
import { RxDashboard } from "react-icons/rx";
import { RiEBike2Line, RiListOrdered2 } from "react-icons/ri";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaMoneyBillAlt } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { BiLogOutCircle } from "react-icons/bi";

const slideIn = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const OverLay = styled.div`
	/* Your sidebar styles here */
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	backdrop-filter: blur(3px);
	color: white;
	z-index: 999;
`;

const SidebarContainer = styled.div<{ isOpen: boolean }>`
	/* Your sidebar styles here */
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	width: 200px;
	background-color: #101828;
	color: white;
	height: 100%;
	animation: ${(props) => (props.isOpen ? slideIn : slideOut)} 0.3s forwards;
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

type Iprops = {
	toggle: () => void;
	show: boolean;
};

const MobileSidebar: React.FC<Iprops> = ({ toggle, show }) => {
	return (
		<OverLay onClick={toggle}>
			<SidebarContainer isOpen={show}>
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
		</OverLay>
	);
};

export default MobileSidebar;
