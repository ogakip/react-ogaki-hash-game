import React, { ReactNode } from 'react';
export interface contextProps {
	children: ReactNode;
}

export interface squareProps {
	id: number;
	checked: boolean;
	player: string;
}

export interface gameProviderProps {
	playerMove: (squareId: number) => void;
	table: squareProps[]
}
