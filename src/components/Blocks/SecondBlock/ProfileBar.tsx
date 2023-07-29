import React from "react";
import styled from "styled-components";

const SidebarContainer = styled.div`
	/* Your sidebar styles here */
	position: fixed;
	top: 60px;
	right: 0;
	bottom: 0;
	width: 250px;
	color: black;
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
	z-index: 10;
	background-color: white;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

const Wrapper = styled.div`
	margin-top:5px;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	text-align: center;
	width: 100%;

`;

const Cont = styled.div`
	margin-top: 45px;
`;

const User = styled.div`
	height: 70px;
	width: 70px;
	background-color: #aaaaaa;
	border-radius: 50%;
	margin: 0 auto;
    margin-bottom: 10px;
`;

const ProfileBar: React.FC = () => {
	return (
		<SidebarContainer>
			<Wrapper>
				<Cont>
					<User></User>
					<div>Gideon Ekeke</div>
					<div>Gideonekeke@test.com</div>
					<div>SuperAdmin</div>
				</Cont>
			</Wrapper>
		</SidebarContainer>
	);
};

export default ProfileBar;
