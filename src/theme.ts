import { MantineColorsTuple, createTheme } from '@mantine/core';

const violet: MantineColorsTuple = [
  '#f4efff',
  '#e3dcf5',
  '#c4b5e6',
  '#a38cd7',
  '#8769ca',
  '#7553c2',
  '#6d47c0',
  '#5c39a9',
  '#513298',
  '#452a87',
];

export const theme = createTheme({
  fontFamily: 'Roboto Mono',
  headings: {
    fontFamily: 'Roboto Mono',
  },
  primaryColor: 'highViolet',
  colors: {
    highViolet: violet,
  },
});
