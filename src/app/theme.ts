/* eslint-disable no-shadow */
const colors = {
    primary: 'black',
    secondary: 'tan',
    hint: 'grey',
    cancel: 'red',
    boxButton: 'white',
};

export const theme = {
    colors,
    borders: {
        primary: `2px solid ${colors.primary}`,
        secondary: `2px solid ${colors.secondary}`,
    },
    space: [0, 4, 8, 16, 32, 64, 128, 256],
    fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
    sizes: [0, 4, 8, 16, 32, 64, 128, 256],
    // forms: {
    //     input: {
    //         color: 'primary',
    //         border: 'primary',
    //     },
    // },
    // boxSizes: {
    //     rounded: {
    //         border: 'primary',
    //         borderRadius: '100px',
    //     },
    // },
    // buttonSizes: {
    //     cancel: {
    //         color: colors.cancel,
    //         border: `2px solid ${colors.primary}`,
    //         borderRadius: '100px',
    //     },
    // },
};

declare module 'styled-components' {
    type Theme = typeof theme;
    export interface DefaultTheme extends Theme {}
}
