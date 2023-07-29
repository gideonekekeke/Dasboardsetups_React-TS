import React, { useState } from "react";
import styled from "styled-components";
import { MdOutlineNotifications } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import MobileSidebar from "./MobileSideBar";

const NavbarContainer = styled.div`
	/* Your navbar styles here */
	position: fixed;
	top: 0;
	left: 0; /* Adjust this value to match the width of the Sidebar */
	right: 0;
	height: 60px;
	background-color: #fff;
	box-shadow: 0 2px 5px rgba(219, 219, 219, 0.1);
	display: flex;
	align-items: center;
	padding-left: 20px;
	padding-right: 20px;

	@media screen and (max-width: 768px) {
		left: 0;
	}
`;

const User = styled.div`
	display: flex;
	align-items: center;
`;

const Down = styled.div`
	display: flex;
	width: 260px;
	padding: 8px 14px;
	justify-content: center;
	align-items: center;
	gap: 8px;
	flex-shrink: 0;

	input {
		width: 100%;
	}
`;

const Cont = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`;

const IconHold = styled.div`
	display: flex;
	width: 30px;
	height: 30px;
	margin-right: 20px;
	justify-content: center;
	align-items: center;
	flex-shrink: 0;
	background-color: black;
	color: white;
`;

const Hold = styled.div``;
const Uname = styled.div``;
const UEmail = styled.div`
	color: gray;
`;

const Menu = styled.div`
	display: none;

	@media screen and (max-width: 768px) {
		display: block;
		cursor: pointer;
		font-size: 25px;
	}
`;

const Navbar: React.FC = () => {
	const [show, setShow] = useState<boolean>(false);

	const toggle = () => {
		setShow(!show);
	};

	return (
		<NavbarContainer>
			<Menu onClick={toggle}>
				<AiOutlineMenu />
			</Menu>
			<Cont>
				<div>logo</div>
				<Down>
					<input placeholder='Search' />
				</Down>
				<User>
					<IconHold>
						<MdOutlineNotifications />
					</IconHold>
					<IconHold style={{ borderRadius: "360px", fontSize: "12px" }}>
						NA
					</IconHold>
					<Hold>
						<Uname>name</Uname>
						<UEmail>youremail@gmail.com</UEmail>
					</Hold>
				</User>
			</Cont>
			{show ? <MobileSidebar toggle={toggle} show={show} /> : null}
		</NavbarContainer>
	);
};

export default Navbar;
