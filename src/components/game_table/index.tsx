import React, { useContext } from 'react';
import { GameContext } from '../../context/game';
import { GameSquare } from '../game_square';
import * as style from './styles';

export const GameTable = (): JSX.Element => {
	const { table } = useContext(GameContext);

	return (
		<style.Wrapper>
			{table.length &&
				table.map(({ id, player, checked }) => {
					return <GameSquare key={id} checked={checked} text={player} squareId={id} />;
				})}
		</style.Wrapper>
	);
};
