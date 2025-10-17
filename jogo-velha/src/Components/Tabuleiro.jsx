import Quadradinho from "./Quadradinho"
import './Tabuleiro.css'
import { useState } from 'react'

function Tabuleiro() {

    const [quadrados, setQuadrados] = useState(Array(9).fill(" "))
    const [xProximo, setXProximo] = useState(true)
    const [status, setStatus] = useState("Próximo: X")


    setQuadrados(next)
    setXProximo(!xProximo)

    function calcularVencedor(quadrados) { // funçao para calcular o ganhador
        const linhas = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < linhas.length; i++) {
            const [a, b, c] = linhas[i]
            if (quadrados[a] && quadrados[a] === quadrados[b] && quadrados[a] === quadrados[c]) {
                return quadrados[a]
            }
        }

        return null
    }

    function handleClick(i) {

        if (quadrados[i] !== " " || calcularVencedor(quadrados)) return

        const next = quadrados.slice()
        next[i] = xProximo ? "X" : "O"

        setQuadrados(next)
        setXProximo(next)

        if (xProximo) {
            next[i] = "X"
        } else {
            next[i] = "O"
        }

        const vencedor = calcularVencedor(next)
        if (vencedor) {
            setStatus("Vencedor: " + vencedor)
        } else {
            setStatus("Próximo: " + (xProximo ? "O" : "X"))
        }
}

    return (
        <>
            <main className="paginaTabuleiro">
                <h2>Jogo da Velha</h2>
                <div className="fileira">
                    <Quadradinho value={quadrados[0]} onQuadradoClick={() => handleClick(0)} />
                    <Quadradinho value={quadrados[1]} onQuadradoClick={() => handleClick(1)} />
                    <Quadradinho value={quadrados[2]} onQuadradoClick={() => handleClick(2)} />
                </div>

                <div className="fileira">
                    <Quadradinho value={quadrados[3]} onQuadradoClick={() => handleClick(3)} />
                    <Quadradinho value={quadrados[4]} onQuadradoClick={() => handleClick(4)} />
                    <Quadradinho value={quadrados[5]} onQuadradoClick={() => handleClick(5)} />
                </div>

                <div className="fileira">
                    <Quadradinho value={quadrados[6]} onQuadradoClick={() => handleClick(6)} />
                    <Quadradinho value={quadrados[7]} onQuadradoClick={() => handleClick(7)} />
                    <Quadradinho value={quadrados[8]} onQuadradoClick={() => handleClick(8)} />
                </div>
            </main>
        </>
    )
}
export default Tabuleiro
