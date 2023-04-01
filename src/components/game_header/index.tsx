import React, { useContext } from 'react';
import { GameContext } from '../../context/game';
import * as style from './styles';
import { GrClose } from 'react-icons/gr';
import { FiCircle } from 'react-icons/fi';

export const GameHeader = (): JSX.Element => {
	const { currentPlayer, amountMoves, resetGame } = useContext(GameContext);

	return (
		<style.Wrapper>
			<span>
				JOGADOR ATUAL:
				{currentPlayer === 'X' ? (
					<GrClose />
				) : currentPlayer === 'O' ? (
					<FiCircle />
				) : (
					''
				)}
			</span>
			<span>JOGADAS: <span className='blue'>{amountMoves}</span></span>
			<button onClick={() => resetGame()}>Resetar Jogo</button>
		</style.Wrapper>
	);
};
