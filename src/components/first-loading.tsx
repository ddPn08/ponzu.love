import { Motion, Presence } from '@motionone/solid'
import { Component, createContext, createReaction, createSignal, For, Show, useContext } from 'solid-js'
import { styled } from 'solid-styled-components'

import PonzuIcon from '../assets/images/ponzu-icon-line.webp'
import { createTimeout } from '../hooks/createTimeout'

const Container = styled(Motion.div)`
  position: fixed;
  z-index: 1;
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: black;
  pointer-events: none;
  user-select: none;
`

const Context = createContext<{
  close: boolean
}>({ close: false })

const Icon: Component = () => {
  const context = useContext(Context)

  return (
    <Presence exitBeforeEnter>
      <Show when={!context.close}>
        <Motion initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1, easing: 'ease-in-out' }}>
          <Motion animate={{ rotate: 360 }} transition={{ duration: 1, easing: 'ease-in-out', repeat: Infinity }}>
            <img src={PonzuIcon} width="250px" height="250px" alt="" />
          </Motion>
        </Motion>
      </Show>
    </Presence>
  )
}

const StyledParagraph = styled.p`
  position: absolute;
  font-family: azuki;
  font-size: 2rem;
  text-align: left;
`

const TrailText: Component<{
  children: string
  onComplete: () => void
  gap?: number
}> = (props) => {
  const split = props.children.split('')
  const context = useContext(Context)

  return (
    <StyledParagraph>
      <For each={split}>
        {(value, i) => {
          const [show, setShow] = createSignal(false)
          createTimeout(show, () => setShow(!context.close), 1000 * (i() + 1) * (props.gap || 0.1) + 1000)
          createReaction(() =>
            createTimeout(
              show,
              () => {
                setShow(!context.close)
                if (i() === 0) props.onComplete()
              },
              1000 * (split.length - i() + 1) * (props.gap || 0.1),
            ),
          )(() => context.close)
          return (
            <Presence exitBeforeEnter>
              <Show when={show()}>
                <span
                  style={{
                    color: 'white',
                  }}
                >
                  {value}
                </span>
              </Show>
            </Presence>
          )
        }}
      </For>
    </StyledParagraph>
  )
}

export const FirstLoading: Component<{
  close: boolean
}> = (props) => {
  const [show, setShow] = createSignal(true)
  return (
    <>
      <Context.Provider value={props}>
        <Presence exitBeforeEnter>
          <Show when={show()}>
            <Container initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.75, easing: 'linear' }}>
              <Icon />
              <TrailText
                gap={0.1}
                onComplete={() => {
                  if (props.close) setShow(false)
                }}
              >
                よみこみちゅう...
              </TrailText>
            </Container>
          </Show>
        </Presence>
      </Context.Provider>
    </>
  )
}
