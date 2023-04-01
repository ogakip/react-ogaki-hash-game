import React, {
	createContext,
	FC,
	PropsWithChildren,
	useState,
	useEffect,
} from 'react';
import {
	contextProps,
	gameProviderProps,
	squareProps,
} from '../../interfaces/context';
import { toast } from 'react-toastify';

const initialValue = {
	playerMove: () => '',
	table: [],
	currentPlayer: 'X',
	amountMoves: 0,
	isOver: false,
};

const combinations = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
	[1, 4, 7],
	[2, 5, 8],
	[3, 6, 9],
	[1, 5, 9],
	[3, 5, 7],
];

export const GameContext = createContext<gameProviderProps>(initialValue);

export const GameProvider: FC<PropsWithChildren<contextProps>> = ({
	children,
}) => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [amountMoves, setAmountMoves] = useState(0);
	const [table, setTable] = useState(createSquares);
	const [p1Moves, setP1Moves] = useState<number[]>([]);
	const [p2Moves, setP2Moves] = useState<number[]>([]);
	const [isOver, setIsOver] = useState(false);

	function createSquares () {
		const squares = [];
		for (let currentSquare = 1; currentSquare <= 9; currentSquare++) {
			squares.push({
				id: currentSquare,
				checked: false,
				player: '',
			});
		}
		return squares;
	}

	const gameWasDraw = (newTable: squareProps[]) => {
		const result = newTable.every((square) => square.checked === true);
		if (result) {
			toast.warn('O jogo deu empate!');
		}
	};

	const gameIsOver = (
		playerMoves: number[],
		player: string,
		nextPlayer: string,
	) => {
		const result = combinations.some((combination) =>
			combination.every((num) => playerMoves.includes(num)),
		);
		if (result) {
			setIsOver(true);
			toast.success(`${player} ganhou!`);
		} else {
			setCurrentPlayer(nextPlayer);
		}
	};

	const alreadyCheckedSquare = (squareId: number) => {
		let isChecked = false;

		table.forEach((square) => {
			const { id, checked } = square;

			if (id === squareId && checked === true) {
				isChecked = true;
			}
		});

		return isChecked;
	};

	const checkSquare = (squareId: number) => {
		const oldTable = JSON.parse(JSON.stringify(table));
		const newTable = oldTable.map((square: squareProps) => {
			const { id } = square;

			if (id === squareId) {
				return {
					id,
					checked: true,
					player: currentPlayer,
				};
			} else {
				return square;
			}
		});
		gameWasDraw(newTable);
		setTable(newTable);
	};

	const playerMove = (squareId: number) => {
		if (alreadyCheckedSquare(squareId) === false && isOver === false) {
			checkSquare(squareId);
			setAmountMoves((prevState) => prevState + 1);
			if (currentPlayer === 'X') {
				setP1Moves([...p1Moves, squareId]);
				gameIsOver([...p1Moves, squareId], 'X', 'O');
			} else {
				setP2Moves([...p2Moves, squareId]);
				gameIsOver([...p2Moves, squareId], 'O', 'X');
			}
		}
	};

	return (
		<GameContext.Provider
			value={{
				playerMove,
				table,
				currentPlayer,
				amountMoves,
				isOver,
			}}
		>
			{children}
		</GameContext.Provider>
	);
};
