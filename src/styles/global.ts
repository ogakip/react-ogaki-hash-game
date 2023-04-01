import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
 margin: 0;
 padding: 0;
 border: none;
 box-sizing: border-box;
 font-family: 'Nunito', sans-serif;
}

:root {
 --primary-color: #0A0B0D;
 --secondary-color: #5D75A6;
 --background-color: #B9B4D9
}
`;
