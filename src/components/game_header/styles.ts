import styled from 'styled-components';

export const Wrapper = styled.section`
	width: 90vw;
	max-width: 400px;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	padding: 10px;
	background-color: var(--secondary-color);
	border-radius: 10px;
	box-shadow: var(--secondary-color) 0px 7px 29px 0px;

	> span {
		display: flex;
		align-items: center;
		padding: 5px;
		font-weight: bold;
	}

	> button {
		padding: 5px;
		border-radius: 5px;
		background-color: #1f3768;
		color: white;
		font-weight: 700;
		cursor: pointer;
		transition: all 0.3s ease;

		:hover {
			transform: scale(1.05);
		}
	}

	@media screen and (max-width: 435px) {
		flex-direction: column;
	}
`;
