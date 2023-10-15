import styled from "styled-components";

export const Overlay = styled.div`
    background: #000000CC;
    backdrop-filter: blur(4px);
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    padding-top: 4rem;
    /* align-items: center; */
    justify-content: center;
`;

export const Container = styled.div`
    background: #F0F0F0;
    width: 70%;
    height: fit-content;
    text-align: center;
    padding: 2rem;
    border-radius: 0.5rem;
    box-shadow: 4px 0px 1rem #00000033;

    h2 {
        color: #252525;
        font-weight: 600;
        padding: 0;
    }

    button {
        padding: 1rem;
    }
`;