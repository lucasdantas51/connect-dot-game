import styled from "styled-components";

export const Overlay = styled.div`
    background: #FFFFFFCC;
    backdrop-filter: blur(4px);
    width: ${({$size}) => ($size === 'big') ? '289px' : '304px'};
    height: ${({$size}) => ($size === 'big') ? '289px' : '304px'};
    border-radius: 1rem;
    position: relative;
    top: ${({$size}) => ($size === 'big') ? '-289px' : '-304px'};
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;
