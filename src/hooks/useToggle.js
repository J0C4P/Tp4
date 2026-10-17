import { useState } from "react"

export function useToggle(valorInicial = false) {
  const [valor, setValor] = useState(valorInicial)
  const toggle = () => setValor((v) => !v)
  return [valor, toggle]
}
