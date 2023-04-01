import styled from 'styled-components';

interface WrapperProps {
	checked: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
	cursor: ${(props) => (props.checked ? 'not-allowed' : 'pointer')};
	margin: 5px;
	width: calc(33.33% - 10px);
	height: calc(33.33% - 10px);
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
	background-color: var(--background-color);
	font-weight: 700;
 transition: all 0.3s ease;
 box-shadow: var(--secondary-color) 0px 7px 29px 0px;

	:hover {
  transform: scale(1.05);
  border-radius: 2px;
	}
 
 svg {
  animation: toGrow 0.3s;
  font-size: 3rem;
 }

 @keyframes toGrow {
  0% {
   font-size: 0rem;
  }
  100% {
   font-size: 3rem;
  }
 }
`;
