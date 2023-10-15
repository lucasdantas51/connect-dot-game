import { useState, useEffect } from 'react';

// import { BackgroundHeader, Container, Navbar, ButtonHeader, Content } from './style';
import Board from '../Board';
import Square from '../Square';
import Button from '../Button';
import Modal from "../Modal";

import MacaIcon from '../../assets/icons/maca.png';
import BananaIcon from '../../assets/icons/banana.png';

export default function Level_1() {
  const colorMaca = '#dd1533bf';
  const colorBanana = '#ffe135bf';

  const [squares, setSquares] = useState([[false, false, false], [false, false, false], [false, false, false]]);

  const [macaComplete, setMacaComplete] = useState(false);
  const [BananaComplete, setBananaComplete] = useState(false);

  const [boardX, setBoardX] = useState(false);
  const [boardY, setBoardY] = useState(false);

  // GET Board Position 
  useEffect(() => {
    setBoardX(document.getElementById('board').offsetLeft);
    setBoardY(document.getElementById('board').offsetTop);

    console.log('boardX', boardX)
    console.log('boardY', boardY)
  }, [boardX, boardY])

  // Handle Maca Complete
  const handleTouchStartMaca = () => {
    const novoSquares = [...squares];
    novoSquares[0][0] = colorMaca;
    setSquares(novoSquares);
  };

  const handleTouchMoveMaca = (event) => {
    const novoSquares = [...squares];
    const touchY = event.touches[0].clientY;
    const touchX = event.touches[0].clientX;
    novoSquares[0][0] = colorMaca;
    if (touchY >= boardY + 100) {
      novoSquares[1][0] = colorMaca
      if (touchX >= boardX + 100) {
        novoSquares[1][1] = colorMaca;
        setMacaComplete(true);
      }
      else {
        novoSquares[1][1] = false;
        setMacaComplete(false);
      }
    }
    else {
      novoSquares[1][0] = false;
      novoSquares[1][1] = false;
      setMacaComplete(false);
    }
    setSquares(novoSquares);
  };

  const handleTouchEndMaca = () => {
    if (!macaComplete) {
      const novoSquares = [...squares];

      novoSquares[0][0] = false;
      novoSquares[1][0] = false;
      novoSquares[1][1] = false;

      setSquares(novoSquares);
    }
  };

  // Handle Maca Complete
  const handleTouchStartBanana = () => {
    const novoSquares = [...squares];
    novoSquares[0][1] = colorBanana;
    setSquares(novoSquares);
  };

  const handleTouchMoveBanana = (event) => {
    const novoSquares = [...squares];

    const touchY = event.touches[0].clientY;
    const touchX = event.touches[0].clientX;

    novoSquares[0][1] = colorBanana;

    if (squares[2][2]) {
      novoSquares[2][1] = (touchX <= boardX + 200) ? colorBanana : false;
      novoSquares[2][0] = (squares[2][1] && touchX <= boardX + 100) ? colorBanana : false;
    }
    else {
      novoSquares[0][2] = (squares[0][1] && touchX >= boardX + 200 && touchY > boardY) ? colorBanana : false;
      novoSquares[1][2] = (squares[0][2] && touchX >= boardX + 200 && touchY >= boardY + 100) ? colorBanana : false;
      novoSquares[2][2] = (squares[0][2] && touchX >= boardX + 200 && touchY >= boardY + 200) ? colorBanana : false;
    }

    squares[2][0] ? setBananaComplete(true) : setBananaComplete(false);

    setSquares(novoSquares);
  };

  const handleTouchEndBanana = () => {
    if (!BananaComplete) {
      const novoSquares = [...squares];

      novoSquares[2][1] = false;
      novoSquares[2][0] = false;
      novoSquares[0][2] = false;
      novoSquares[1][2] = false;
      novoSquares[2][2] = false;

      setSquares(novoSquares);
    }
  };

  const reset = () => {
    setMacaComplete(false);
    setBananaComplete(false);
    setSquares([[false, false, false], [false, false, false], [false, false, false]]);
  }

  return (
    <>
      {macaComplete && BananaComplete && <Modal />}
      <Board id="board">
        {/* Row A */}
        <Square
          $background={squares[0][0]}
          onTouchStart={handleTouchStartMaca}
          onTouchMove={handleTouchMoveMaca}
          onTouchEnd={handleTouchEndMaca}
        >
          <span>Maça</span>
        </Square>
        <Square
          $background={squares[0][1]}
          onTouchStart={handleTouchStartBanana}
          onTouchMove={handleTouchMoveBanana}
          onTouchEnd={handleTouchEndBanana}
        >
          <span>Banana</span>
        </Square>
        <Square $background={squares[0][2]}></Square>

        {/* Row B */}
        <Square $background={squares[1][0]}></Square>
        <Square $background={squares[1][1]}>
          <img src={MacaIcon} alt='Maça' />
        </Square>
        <Square $background={squares[1][2]}></Square>

        {/* Row C */}
        <Square $background={squares[2][0]}>
          <img src={BananaIcon} alt='Banana' />
        </Square>
        <Square $background={squares[2][1]}></Square>
        <Square $background={squares[2][2]}></Square>
      </Board>
      <Button onClick={reset}>
        <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.7644 8.56549H22.0144V3.31549" stroke="#636363" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M17.2457 18.1905C15.8698 19.4888 14.1418 20.3529 12.2776 20.6747C10.4134 20.9966 8.49575 20.762 6.76416 20.0002C5.03256 19.2384 3.56385 17.9832 2.54153 16.3915C1.5192 14.7998 0.988604 12.9421 1.01603 11.0505C1.04345 9.15899 1.62768 7.31746 2.69571 5.75604C3.76375 4.19462 5.26823 2.98255 7.02118 2.27129C8.77413 1.56002 10.6978 1.38109 12.5519 1.75686C14.4059 2.13263 16.1081 3.04642 17.4458 4.38408L22.0144 8.56549" stroke="#636363" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </Button>
    </>
  )
}