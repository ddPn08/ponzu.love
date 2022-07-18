import { Accessor, createComputed, on, onCleanup } from 'solid-js'

export const createTimeout = <T,>(accessor: Accessor<T>, fn: (value: T) => void, timeout: number) => {
  let timer: number
  createComputed(
    on(accessor, (v) => {
      timer = setTimeout(fn.bind(null, v), timeout)
    }),
  )
  onCleanup(() => clearTimeout(timer))
}
