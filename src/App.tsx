import React, { useContext } from 'react';
import { GameContext } from './context/game';

export const App = () => {
	const { playerMove, table } = useContext(GameContext);

	const handlePlayerMode = (squareId: number) => {
		playerMove(squareId);
	};

	return (
		<div>
			{table.length &&
				table.map((square) => (
					<div
						style={{
							padding: '10px',
							borderRadius: '5px',
							backgroundColor: 'red',
							color: 'white',
							margin: '5px',
						}}
						key={square.id}
						onClick={() => handlePlayerMode(square.id)}
					>
						{square.id}
					</div>
				))}
		</div>
	);
};

