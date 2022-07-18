import { Component } from 'solid-js'
import { css, styled } from 'solid-styled-components'
import { useMediaQuery } from 'solid-use'

import { MediaBreakpoints } from '../media'

const Container = styled.div`
  margin-top: 2rem;
  text-align: center;
`

export const YouTube: Component = () => {
  const isMobile = useMediaQuery(MediaBreakpoints.sm)
  return (
    <Container>
      <h1
        class={css`
          margin-top: 1rem;
        `}
      >
        最新動画
      </h1>
      <iframe
        src="https://www.youtube.com/embed/?list=UURsK0kVuSf2KIKUAqbByLNA"
        class={css`
          width: ${isMobile() ? '90%' : '60%'};
          border: none;
          aspect-ratio: 16 / 9;
        `}
      />
    </Container>
  )
}
