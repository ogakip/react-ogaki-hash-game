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
};

const createSquares = () => {
	const squares = [];
	for (let currentSquare = 1; currentSquare <= 9; currentSquare++) {
		squares.push({
			id: currentSquare,
			checked: false,
			player: '',
		});
	}
	return squares;
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

	const gameIsOver = (playerMoves: number[]) => {
		console.log(playerMoves);
		console.log(
			combinations.some((combination) =>
				combination.every((num) => playerMoves.includes(num)),
			),
		);
		return combinations.some((combination) =>
			combination.every((num) => playerMoves.includes(num)),
		);
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
		setTable(newTable);
	};

	const playerMove = (squareId: number) => {
		if (alreadyCheckedSquare(squareId) === false && isOver === false) {
			checkSquare(squareId);
			setAmountMoves((prevState) => prevState + 1);
			if (currentPlayer === 'X') {
				setP1Moves([...p1Moves, squareId]);
				if (gameIsOver([...p1Moves, squareId])) {
					setIsOver(true);
					toast.success('X ganhou');
				} else {
					setCurrentPlayer('O');
				}
			} else {
				setP2Moves([...p2Moves, squareId]);
				if (gameIsOver([...p2Moves, squareId])) {
					setIsOver(true);
					toast.success('O ganhou');
				} else {
					setCurrentPlayer('X');
				}
			}
		}
	};

	useEffect(() => {
		if (currentPlayer) {
			console.log({ currentPlayer });
		}
	}, [currentPlayer]);

	useEffect(() => {
		if (p1Moves && p2Moves) {
			console.log({ p1Moves });
			console.log({ p2Moves });
		}
	}, [p1Moves, p2Moves]);

	useEffect(() => {
		if (table) {
			console.log({ table });
		}
	}, [table]);

	return (
		<GameContext.Provider
			value={{
				playerMove,
				table,
			}}
		>
			{children}
		</GameContext.Provider>
	);
};
