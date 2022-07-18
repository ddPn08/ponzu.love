import { Component } from 'solid-js'
import { css, styled, useTheme } from 'solid-styled-components'

const Container = styled.div`
  min-height: 75px;
  margin-top: 2rem;
  text-align: center;
`

export const Footer: Component = () => {
  const theme = useTheme()
  return (
    <Container>
      <p>
        ©2022 by{' '}
        <span>
          <a
            href="https://twitter.com/ddpn08"
            target="_blank"
            class={css`
              color: ${theme.colors.primary};
              text-decoration: none;
            `}
          >
            ddPn08
          </a>
        </span>
      </p>
    </Container>
  )
}
