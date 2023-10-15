import { createPortal } from "react-dom";

import { Overlay, Container } from "./styles";

import Button from '../Button'

export default function Modal() {
    return (
        createPortal(
        <Overlay>
            <Container>
                <h2>Parabéns, você completou o jogo.</h2>
                <Button onClick={() => {document.location.reload()}}>Jogar novamente</Button>
            </Container>
        </Overlay>
    , document.getElementById('modal-root')))
}