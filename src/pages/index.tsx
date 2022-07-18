import { Component, createSignal } from 'solid-js'
import { styled } from 'solid-styled-components'

import Background from '../assets/images/background.webp'
import PonzuIcon from '../assets/images/favicon.webp'
import { Footer } from '../components/footer'
import { Links } from '../components/links'
import { Music } from '../components/music'
import { YouTube } from '../components/youtube'

const Container = styled.div`
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${Background});
  background-attachment: fixed;
  color: ${(p) => p.theme?.colors.primary};
  overflow-y: auto;
  text-align: center;
`

const Title = styled.a`
  color: ${(p) => p.theme?.colors.primary};
  text-align: left;
  text-decoration: none;

  h1 {
    padding: 2rem;
    font-size: 3rem;
    text-shadow: 0 0 0.5rem black;
  }
`

const Icon = styled.div`
  text-align: center;

  div {
    display: inline-block;
    height: 200px;
    padding: 2rem;
    background-color: ${(p) => p.theme?.colors.primary};
    border-radius: 1rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
    text-align: center;

    img {
      filter: drop-shadow(4px 4px 5px rgba(0, 0, 0, 0.25));
    }
  }
`

const Profile = styled.div`
  margin-top: 1rem;
  text-align: center;
`

const Index: Component = () => {
  const [scrollRatio, setScrollRatio] = createSignal(0)
  return (
    <Container
      onScroll={(e) => {
        const ratio = Math.round((e.currentTarget.scrollTop / (e.currentTarget.scrollHeight - e.currentTarget.clientHeight)) * 100)
        setScrollRatio(ratio)
      }}
      style={{
        /* stylelint-disable */
        'background-position': `${scrollRatio()}% 0`,
      }}
    >
      <Title href="/">
        <h1>ponzu.love</h1>
      </Title>
      <Icon>
        <div>
          <img src={PonzuIcon} alt="" />
        </div>
      </Icon>
      <Profile>
        <h1>ぽんず</h1>
        <p>ボカロP</p>
      </Profile>
      <Links />
      <YouTube />
      <Music />
      <Footer />
    </Container>
  )
}

export default Index
