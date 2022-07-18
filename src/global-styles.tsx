import { createGlobalStyles as styled } from 'solid-styled-components'

import AzukiFont from './assets/fonts/azuki-subset.ttf'

export const GlobalStyles = styled`
  @font-face {
    font-family: 'azuki';
    font-display: swap;
    src: url(${AzukiFont});
  }

  *,
  ::before,
  ::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: inherit;
  }

  html {
    word-break: break-word;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: none;
    -webkit-tap-highlight-color: transparent;
  }

  body {
    font-family: 'Inter', 'Zen Kaku Gothic New', 'sans-serif';
    font-size: 16px;
    line-height: 1.5;
    word-break: break-word;
  }

  ol,
  ul {
    list-style: none;
  }

  a {
    text-decoration: underline;
  }

  @media (hover: hover) and (pointer: fine) {
    a:hover {
      text-decoration: none;
    }
  }

  img {
    max-height: 100%;
    width: auto;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 700;
    line-height: 1.125;
  }

  h1 {
    font-size: 36px;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 48px;
    }
  }

  h2 {
    font-size: 24px;
  }

  @media (min-width: 768px) {
    h2 {
      font-size: 32px;
    }
  }

  h3 {
    font-size: 20px;
  }

  h4 {
    font-size: 16px;
  }

  h5 {
    font-size: 14px;
  }

  h6 {
    font-size: 12px;
  }

  p {
    line-height: 1.75;
  }

`
