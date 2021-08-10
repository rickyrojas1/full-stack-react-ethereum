export type Theme = {
  theme: string;
  header: string;
  body: string;
  inverseHeader: string;
  inverseBody: string;
  text: string;
  toggleBorder: string;
  gradient: string;
};

export const colorCombos = [
  ['#1fe4f5', '#3fbafe'],
  ['#fbc1cc', '#fa99b2'],
  ['#76b2fe', '#b69efe'],
  ['#60efbc', '#58d5c9'],
  ['#f588d8', '#c0a3e5'],
];

export const lightTheme: Theme = {
  theme: 'light',
  header: '#F7F6F3',
  body: '#E2E2E2',
  inverseHeader: '#2C2D30',
  inverseBody: '#1E2022',
  text: '#363537',
  toggleBorder: '#FFF',
  gradient: 'linear-gradient(#39598A, #79D7ED)',
};

export const darkTheme: Theme = {
  theme: 'dark',
  header: '#2C2D30',
  body: '#1E2022',
  inverseHeader: '#F7F6F3',
  inverseBody: '#E2E2E2',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  gradient: 'linear-gradient(#091236, #1E215D)',
};
