import { createContext } from 'react';
import { PrimaryColors } from './theme';

export const PrimaryColorContext = createContext<((value: PrimaryColors) => void) | undefined>(
  undefined
);
