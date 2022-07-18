import { Route, Router, Routes } from 'solid-app-router'
import { Component, lazy, For } from 'solid-js'

const pages = Object.entries(import.meta.glob('./pages/**/*.tsx')).map(([name, module]: [string, () => Promise<any>]) => {
  let pathname = name.replace('./pages', '').replace('.tsx', '')
  pathname.endsWith('/index') && (pathname = pathname.slice(0, -6))
  return { pathname, Component: lazy(module) }
})

export const ApplicationRoutes: Component = () => {
  return (
    <Router>
      <Routes>
        <For each={pages}>{({ pathname, Component }) => <Route path={pathname} element={<Component />} />}</For>
      </Routes>
    </Router>
  )
}
