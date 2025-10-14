import './Quadradinho.css'

function Quadradinho({ value, onQuadradoClick }) {

    return (
        <>
            <button
                className="quadradinho"
                onClick={onQuadradoClick}
            >
                {value}
            </button>
        </>
    )

}
export default Quadradinho