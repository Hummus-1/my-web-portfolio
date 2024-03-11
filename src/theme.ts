import { CSSVariablesResolver, MantineColorsTuple, createTheme } from '@mantine/core';

const highViolet: MantineColorsTuple = [
  '#f2ebff',
  '#ded3fd',
  '#bba3f7',
  '#9571f2',
  '#7546ed',
  '#612beb',
  '#561deb',
  '#4712d1',
  '#3e0ebc',
  '#3309a6',
];

const snakeGreen: MantineColorsTuple = [
  '#f8feec',
  '#effbd8',
  '#ddf8a9',
  '#cbf478',
  '#bbf151',
  '#b0ef3a',
  '#abee2f',
  '#96d324',
  '#83bb1b',
  '#6fa20b',
];

const sheepBrown: MantineColorsTuple = [
  '#f8f5f1',
  '#ebe8e4',
  '#d8cdc4',
  '#c5b1a1',
  '#b69a82',
  '#ac8b6e',
  '#a88363',
  '#937053',
  '#836347',
  '#74553a',
];

export type PrimaryColors = 'highViolet' | 'snakeGreen' | 'sheepBrown';
export const resolver: CSSVariablesResolver = () => ({
  variables: {},
  light: {
    '--mantine-color-text': '#000000',
  },
  dark: {
    '--mantine-color-text': '#FFFFFF',
  },
});

export const theme = createTheme({
  fontFamily: 'Roboto Mono',
  headings: {
    fontFamily: 'Roboto Mono',
  },
  primaryColor: 'highViolet',
  colors: {
    highViolet,
    snakeGreen,
    sheepBrown,
  },
});
