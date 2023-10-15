import { useState, useEffect } from 'react';

import Board from '../Board';
import Square from '../Square';
import CompleteMessage from '../CompleteMessage';

import MacaIcon from '../../assets/icons/maca.png';
import BananaIcon from '../../assets/icons/banana.png';
import UvaIcon from '../../assets/icons/uva.png';

export default function Level3({reset}) {
  const colorMaca = '#dd1533bf';
  const colorBanana = '#ffe135bf';
  const colorUva = '#6f2da8bf';

  const [squares, setSquares] = useState([[false, false, false], [false, false, false], [false, false, false]]);

  const [macaComplete, setMacaComplete] = useState(false);
  const [BananaComplete, setBananaComplete] = useState(false);
  const [uvaComplete, setUvaComplete] = useState(false);

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
    novoSquares[1][2] = colorMaca;
    setSquares(novoSquares);
  };

  const handleTouchMoveMaca = (event) => {
    const novoSquares = [...squares];

    const touchY = event.touches[0].clientY;
    const touchX = event.touches[0].clientX;

    novoSquares[0][2] = (squares[1][2] && touchY <= boardY + 100) ? colorMaca : false;
    novoSquares[0][1] = (squares[0][2] && touchX <= boardX + 200) ? colorMaca : false;

    squares[0][1] ? setMacaComplete(true) : setMacaComplete(false);

    setSquares(novoSquares);
  };

  const handleTouchEndMaca = () => {
    if (!macaComplete) {
      const novoSquares = [...squares];

      novoSquares[0][1] = (squares[0][1] === colorMaca) ? false : squares[0][1];
      novoSquares[0][2] = (squares[0][2] === colorMaca) ? false : squares[0][2];
      novoSquares[1][2] = (squares[1][2] === colorMaca) ? false : squares[1][2];

      setSquares(novoSquares);
    }
  };

  // Handle Maca Complete
  const handleTouchStartBanana = () => {
    const novoSquares = [...squares];
    novoSquares[2][0] = colorBanana;
    setSquares(novoSquares);
  };

  const handleTouchMoveBanana = (event) => {
    const novoSquares = [...squares];

    const touchY = event.touches[0].clientY;
    const touchX = event.touches[0].clientX;

    novoSquares[2][0] = colorBanana;

    if (!novoSquares[2][1] || novoSquares[2][1] === colorBanana) {
      novoSquares[2][1] = (squares[2][0] && touchX >= boardX + 100) ? colorBanana : false;
    }

    if (!novoSquares[1][0] || novoSquares[1][0] === colorBanana) {
      novoSquares[1][0] = (squares[2][0] && touchY <= boardY + 200) ? colorBanana : false;
    }

    if (!novoSquares[0][0] || novoSquares[0][0] === colorBanana) {
      novoSquares[0][0] = (squares[1][0] && touchY <= boardY + 100) ? colorBanana : false;
    }

    squares[0][0] ? setBananaComplete(true) : setBananaComplete(false);

    setSquares(novoSquares);
  };

  const handleTouchEndBanana = () => {
    if (!BananaComplete) {
      const novoSquares = [...squares];

      novoSquares[2][0] = (squares[2][0] === colorBanana) ? false : squares[2][0];
      novoSquares[2][1] = (squares[2][1] === colorBanana) ? false : squares[2][1];
      novoSquares[1][0] = (squares[1][0] === colorBanana) ? false : squares[1][0];
      novoSquares[0][0] = (squares[0][0] === colorBanana) ? false : squares[0][0];

      setSquares(novoSquares);
    }
  };

  // Handle Uva Complete
  const handleTouchStartUva = () => {
    const novoSquares = [...squares];
    novoSquares[2][2] = colorUva;
    setSquares(novoSquares);
  };

  const handleTouchMoveUva = (event) => {
    const novoSquares = [...squares];

    const touchY = event.touches[0].clientY;
    const touchX = event.touches[0].clientX;

    novoSquares[2][1] = (squares[2][2] && touchX <= boardX + 200) ? colorUva : false;
    novoSquares[1][1] = (squares[2][1] && touchY <= boardY + 200) ? colorUva : false;

    squares[1][1] ? setUvaComplete(true) : setUvaComplete(false);

    setSquares(novoSquares);
  };

  const handleTouchEndUva = () => {
    if (!uvaComplete) {
      const novoSquares = [...squares];

      novoSquares[2][2] = (squares[2][2] === colorUva) ? false : squares[2][2];
      novoSquares[2][1] = (squares[2][1] === colorUva) ? false : squares[2][1];
      novoSquares[1][1] = (squares[1][1] === colorUva) ? false : squares[1][1];

      setSquares(novoSquares);
    }
  };

  useEffect(() => {
    if (reset) {
      setMacaComplete(false);
      setBananaComplete(false);
      setUvaComplete(false);
      setSquares([[false, false, false], [false, false, false], [false, false, false]]);
    }
  }, [reset])

  return (
    <div className="m-auto board-size-small">
      <Board id="board">
        <Square $background={squares[0][0]}>
          <img src={BananaIcon} alt='Banana' />
        </Square>
        <Square $background={squares[0][1]}>
          <img src={MacaIcon} alt='Maçã' />
        </Square>
        <Square 
          $background={squares[0][2]}
          >
        </Square>

        <Square $background={squares[1][0]}></Square>
        <Square $background={squares[1][1]}>
          <img src={UvaIcon} alt='Uva' />
        </Square>
        <Square 
          $background={squares[1][2]}
          onTouchStart={handleTouchStartMaca}
          onTouchMove={handleTouchMoveMaca}
          onTouchEnd={handleTouchEndMaca}
        >
          <span>Maçã</span>
        </Square>

        <Square 
          $background={squares[2][0]}
          onTouchStart={handleTouchStartBanana}
          onTouchMove={handleTouchMoveBanana}
          onTouchEnd={handleTouchEndBanana}
        >
          <span>Banana</span>
        </Square>
        <Square $background={squares[2][1]}></Square>
        <Square 
          $background={squares[2][2]}
          onTouchStart={handleTouchStartUva}
          onTouchMove={handleTouchMoveUva}
          onTouchEnd={handleTouchEndUva}
        >
          <span>Uva</span>
        </Square>
      </Board>
      {
        macaComplete &&
        BananaComplete &&
        uvaComplete &&
        <div className='h-0'>
          <CompleteMessage>
            <h2>Parabéns, você completou esse fase.</h2>
          </CompleteMessage>
        </div>
      }
    </div>
  )
}