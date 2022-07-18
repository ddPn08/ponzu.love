import { Component } from 'solid-js'
import { css, styled } from 'solid-styled-components'
import { useMediaQuery } from 'solid-use'

import ClubHouseSVG from '../assets/svg/clubhouse.svg'
import InstagramSVG from '../assets/svg/instagram.svg'
import TelevisionSVG from '../assets/svg/television.svg'
import TiktokSVG from '../assets/svg/tiktok.svg'
import TwitterSVG from '../assets/svg/twitter.svg'
import YouTubeSVG from '../assets/svg/youtube.svg'
import { MediaBreakpoints } from '../media'

const Container = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  gap: 1rem;
`

const Link = styled.a`
  display: grid;
  height: 100px;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: ${(p) => p.theme?.colors.primary};
  border-radius: 0.5rem;
  color: black;
  gap: 1rem;
  grid-template-columns: 100px 1fr;
  grid-template-rows: 1fr 1fr;
  text-decoration: none;

  svg {
    max-height: 75%;
    grid-column: 1 / 2;
    grid-row: 1 / 3;
  }

  h1 {
    font-size: 1.5rem;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }

  p {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }

  ${(p) => p.theme?.media.breakpoints.sm} {
    width: 90%;
  }
`

export const Links: Component = () => {
  const isMobile = useMediaQuery(MediaBreakpoints.sm)
  return (
    <Container
      class={css`
        width: ${isMobile() ? '90%' : '60%'};
      `}
    >
      <Link href="https://youtube.com/channel/UCRsK0kVuSf2KIKUAqbByLNA" target="_blank">
        <YouTubeSVG />
        <h1>YouTube</h1>
      </Link>
      <Link href="https://www.nicovideo.jp/user/116573198" target="_blank">
        <TelevisionSVG />
        <h1>ニコニコ</h1>
      </Link>
      <Link href="https://twitter.com/ponzu_1612" target="_blank">
        <TwitterSVG />
        <h1>Twitter</h1>
      </Link>
      <Link href="https://www.tiktok.com/@ponzu1612" target="_blank">
        <TiktokSVG />
        <h1>Tiktok</h1>
      </Link>
      <Link href="https://www.instagram.com/ponnnzu_1612/" target="_blank">
        <InstagramSVG />
        <h1>Instagram</h1>
      </Link>
      <Link href="https://www.joinclubhouse.com/@ponzu1612" target="_blank">
        <ClubHouseSVG />
        <h1>Clubhouse</h1>
      </Link>
    </Container>
  )
}
