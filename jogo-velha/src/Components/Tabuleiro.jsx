import Quadradinho from "./Quadradinho";
import './Tabuleiro.css'
import { useState } from "react";
import Winx from '../Assets/Winx.png'
import WinxClub from '../Assets/WinxClub.png'

function Tabuleiro() {

    const [quadrados, setQuadrados] = useState(Array(9).fill(" "))
    const [xProximo, setXProximo] = useState(true)

    function handleClick(i) {
        if (quadrados[i] != " " || vencedor === null) {

            if (vencedor === null) {
                console.log("Você é o vencedor!")
            }
            return
        }

        const next = quadrados.slice()
        if (xProximo) {
            next[i] = "X"
        } else {
            next[i] = "O"
        }
        setXProximo(!xProximo)
        setQuadrados(next)
    }

    const winner = vencedor(quadrados)
    let status;
    if (winner) {
        status = "Vencedor: " + winner
    } else {
        status = "Próximo jogador: " + (xProximo ? 'X' : 'O')
    }

    function vencedor(quadrados) {
        const linhas = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],

        ]
        for (let i = 0; i < linhas.length; i++) {
            const [a, b, c] = linhas[i];
            if (quadrados[a] && quadrados[a] === quadrados[b] && quadrados[a] === quadrados[c]) {
                return quadrados[a]
            }
        }
        return null
    }
    return (
        <>
            <main className="paginaTabuleiro">
                <h1 className="status">{status}</h1>
                <section className="tabuleiro">
                    <img src={Winx} alt="logotipo das Winx" className="logoJogo" />
                    <img src={WinxClub} alt="imagem das fadas winx" className="imgWinx" />
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
                </section>
            </main>
        </>
    )
}

export default Tabuleiro;