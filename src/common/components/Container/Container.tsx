import type { FC, PropsWithChildren } from 'react';

import { Container as MUIContainer } from '@mui/material';

export const Container: FC<PropsWithChildren> = ({ children }) => <MUIContainer maxWidth="lg">{children}</MUIContainer>;
