import { Component } from 'solid-js'
import { css, styled } from 'solid-styled-components'

const Container = styled.div`
  margin-top: 2rem;
  text-align: center;
`

export const Music: Component = () => {
  return (
    <Container>
      <h1
        class={css`
          margin-top: 1rem;
        `}
      >
        楽曲一覧
      </h1>
      <iframe
        src="https://linkco.re/embed/84HMm8B9"
        width="300"
        height="600"
        class={css`
          border: none;
        `}
      />
    </Container>
  )
}
