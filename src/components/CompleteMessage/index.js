import { Overlay } from "./styles";

export default function CompleteMessage({size}) {
    return (
        <Overlay $size={size}>
            <h2>Parabéns, você completou o jogo.</h2>
        </Overlay>
    )
}