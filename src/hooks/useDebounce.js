import { useState, useEffect } from "react"

export function useDebounce(valor, demora) {
  const [valorRetrasado, setValorRetrasado] = useState(valor)

  useEffect(() => {
    const temporizador = setTimeout(() => setValorRetrasado(valor), demora)
    return () => clearTimeout(temporizador)
  }, [valor, demora])

  return valorRetrasado
}
