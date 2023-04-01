import React, { useContext } from 'react';
import { GameContext } from '../../context/game';
import * as style from './styles';
import { GrClose } from 'react-icons/gr';
import { FiCircle } from 'react-icons/fi';

interface teste {
	text: string;
	checked: boolean;
	squareId: number;
}

export const GameSquare = ({ text, checked, squareId }: teste): JSX.Element => {
	const { playerMove } = useContext(GameContext);

	return (
		<style.Wrapper checked={checked} onClick={() => playerMove(squareId)}>
			{text === 'X' ? <GrClose /> : text === 'O' ? <FiCircle /> : ''}
		</style.Wrapper>
	);
};
