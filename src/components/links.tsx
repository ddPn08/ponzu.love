import { Component } from 'solid-js'
import { styled } from 'solid-styled-components'

import ClubHouseSVG from '../assets/svg/clubhouse.svg'
import InstagramSVG from '../assets/svg/instagram.svg'
import TiktokSVG from '../assets/svg/tiktok.svg'
import TwitterSVG from '../assets/svg/twitter.svg'
import YouTubeSVG from '../assets/svg/youtube.svg'

const Container = styled.div`
  display: flex;
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
  return (
    <Container>
      <Link href="https://youtube.com/channel/UCRsK0kVuSf2KIKUAqbByLNA">
        <YouTubeSVG />
        <h1>YouTube</h1>
      </Link>
      <Link href="https://twitter.com/ponzu_1612">
        <TwitterSVG />
        <h1>Twitter</h1>
      </Link>
      <Link href="https://www.tiktok.com/@ponzu1612">
        <TiktokSVG />
        <h1>Tiktok</h1>
      </Link>
      <Link href="https://www.instagram.com/ponnnzu_1612/">
        <InstagramSVG />
        <h1>Instagram</h1>
      </Link>
      <Link href="https://www.joinclubhouse.com/@ponzu1612">
        <ClubHouseSVG />
        <h1>Clubhouse</h1>
      </Link>
    </Container>
  )
}
