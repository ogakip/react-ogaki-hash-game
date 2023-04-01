import React, { PropsWithChildren, FC } from 'react';
import { contextProps } from '../interfaces/context';
import { GameProvider } from './game';

export const ContextProvider: FC<PropsWithChildren<contextProps>> = ({
	children,
}) => {
	return <GameProvider>{children}</GameProvider>;
};
