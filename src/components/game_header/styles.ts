import styled from 'styled-components';

export const Wrapper = styled.section`
	width: 90vw;
	max-width: 400px;
	display: flex;
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
`;
