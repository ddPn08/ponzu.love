import { Component, createEffect, createSignal, JSX, Show } from 'solid-js'
import { MetaProvider } from 'solid-meta'
import { ThemeProvider } from 'solid-styled-components'

import { FirstLoading } from './components/first-loading'
import { GlobalStyles } from './global-styles'
import { ApplicationRoutes } from './routes'
import { theme } from './theme'

const Providers: Component<{
  children?: JSX.Element
}> = (props) => (
  <>
    <GlobalStyles />
    <MetaProvider tags={[]}>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </MetaProvider>
  </>
)

export const App: Component = () => {
  const [close, setClose] = createSignal(false)

  createEffect(() => {
    setTimeout(() => {
      setClose(true)
    }, 3000)
  }, [])

  return (
    <Providers>
      <FirstLoading close={close()} />
      <Show when={close()}>
        <ApplicationRoutes />
      </Show>
    </Providers>
  )
}
