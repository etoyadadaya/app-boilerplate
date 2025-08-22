import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
        width: 100%;
        font-family: 'Inter', sans-serif;
    }

    body {
        background-color: white;
        color: black;
        transition: all 0.3s ease;
    }

    button {
        all: unset;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }

    input, textarea, select {
        all: unset;
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;
