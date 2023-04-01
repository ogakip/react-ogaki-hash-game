import React from 'react';
import { GameHeader } from './components/game_header';
import { GameTable } from './components/game_table';

export const App = () => {
	return (
		<div className='App'>
			<GameHeader />
			<GameTable />
		</div>
	);
};
