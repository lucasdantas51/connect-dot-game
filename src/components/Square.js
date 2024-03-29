﻿import { styled } from "styled-components";

export default styled.div`
   display: grid;
   justify-content: center;
   align-items: center;
   width: ${({$size}) => ($size === 'small') ? '71px' : '100px'};
   height: ${({$size}) => ($size === 'small') ? '71px' : '100px'};
   background: ${({$background}) => $background ? $background : '#FFFFFF'};

   img {
      width: 50%;
      margin: auto;
   }

   span {
      color: #252525;
      font-weight: 500;
   }
`;

