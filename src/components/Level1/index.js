import { useState, useEffect } from 'react';

// import { BackgroundHeader, Container, Navbar, ButtonHeader, Content } from './style';
import Board from '../Board';
import Square from '../Square';
import CompleteMessage from '../CompleteMessage';

import MacaIcon from '../../assets/icons/maca.png';
import BananaIcon from '../../assets/icons/banana.png';

export default function Level1({reset}) {
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

  useEffect(() => {
    if (reset) {
      setMacaComplete(false);
      setBananaComplete(false);
      setSquares([[false, false, false], [false, false, false], [false, false, false]]);
    }
  }, [reset])

  return (
    <div className="m-auto board-size-small">
      <Board id="board">
        <Square
          $background={squares[0][0]}
          onTouchStart={handleTouchStartMaca}
          onTouchMove={handleTouchMoveMaca}
          onTouchEnd={handleTouchEndMaca}
        >
          <span>Maçã</span>
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

        <Square $background={squares[1][0]}></Square>
        <Square $background={squares[1][1]}>
          <img src={MacaIcon} alt='Maçã' />
        </Square>
        <Square $background={squares[1][2]}></Square>

        <Square $background={squares[2][0]}>
          <img src={BananaIcon} alt='Banana' />
        </Square>
        <Square $background={squares[2][1]}></Square>
        <Square $background={squares[2][2]}></Square>
      </Board>
      {
        macaComplete &&
        BananaComplete &&
        <div className='h-0'>
          <CompleteMessage>
            <h2>Parabéns, você completou esse fase.</h2>
          </CompleteMessage>
        </div>
      }
    </div>
  )
}