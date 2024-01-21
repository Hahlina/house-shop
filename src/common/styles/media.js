import { css } from 'styled-components';

const device = {
    xs: '375px',
    sm: '425px',
    md: '768px',
    l: '1024px',
    lg: '1280px',
    xl: '1440px'
};

export const media = {
    xs: (...args) => css`
        @media (min-width: ${device.xs}) {
            ${css(...args)};
        }
    `,
    sm: (...args) => css`
        @media (min-width: ${device.sm}) {
            ${css(...args)};
        }
    `,
    md: (...args) => css`
        @media (min-width: ${device.md}) {
            ${css(...args)};
        }
    `,
    l: (...args) => css`
        @media (min-width: ${device.l}) {
            ${css(...args)};
        }
    `,
    lg: (...args) => css`
        @media (min-width: ${device.lg}) {
            ${css(...args)};
        }
    `,
    xl: (...args) => css`
        @media (min-width: ${device.xl}) {
            ${css(...args)};
        }
    `
};
