import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import { App } from './App';
import { ContextProvider } from './context';
import reportWebVitals from './reportWebVitals';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalStyles } from './styles/global';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement,
);
root.render(
	<React.StrictMode>
		<ContextProvider>
			<App />
			<ToastContainer />
			<GlobalStyles />
		</ContextProvider>
	</React.StrictMode>,
);

reportWebVitals();
