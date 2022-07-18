import type { DefaultTheme } from 'solid-styled-components'

import { MediaBreakpoints } from './media'

export const theme: DefaultTheme = {
  colors: {
    primary: 'rgb(255, 250, 230)',
  },
  media: {
    breakpoints: {
      sm: `@media ${MediaBreakpoints.sm}`,
      md: `@media ${MediaBreakpoints.md}`,
      lg: `@media ${MediaBreakpoints.lg}`,
      xl: `@media ${MediaBreakpoints.xl}`,
    },
  },
}

declare module 'solid-styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
    }
    media: {
      breakpoints: {
        sm: string
        md: string
        lg: string
        xl: string
      }
    }
  }
}
