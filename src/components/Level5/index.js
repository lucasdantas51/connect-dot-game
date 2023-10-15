import { useState, useEffect } from 'react';

import Board from '../Board';
import Square from '../Square';
import CompleteMessage from '../CompleteMessage';

import MacaIcon from '../../assets/icons/maca.png';
import BananaIcon from '../../assets/icons/banana.png';
import UvaIcon from '../../assets/icons/uva.png';

export default function Level5({reset}) {
  const colorMaca = '#dd1533bf';
  const colorBanana = '#ffe135bf';
  const colorUva = '#6f2da8bf';

  const [squares, setSquares] = useState([[false, false, false, false], [false, false, false, false], [false, false, false, false], [false, false, false, false]]);

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
    novoSquares[2][1] = colorMaca;
    setSquares(novoSquares);
  };

  const handleTouchMoveMaca = (event) => {
    const novoSquares = [...squares];

    const touchY = event.touches[0].clientY;
    const touchX = event.touches[0].clientX;

    if (!novoSquares[2][0] || novoSquares[2][0] === colorMaca) {
      novoSquares[2][0] = (squares[2][1] && touchX <= boardX + 71) ? colorMaca : false;
    }

    if (!novoSquares[1][0] || novoSquares[1][0] === colorMaca) {
      novoSquares[1][0] = (squares[2][0] && touchY <= boardY + 142) ? colorMaca : false;
    }

    if (!novoSquares[3][0] || novoSquares[3][0] === colorMaca) {
      novoSquares[3][0] = (squares[2][0] && touchY >= boardY + 142) ? colorMaca : false;
    }

    if (!novoSquares[0][0] || novoSquares[0][0] === colorMaca) {
      novoSquares[0][0] = (squares[1][0] && touchY <= boardY + 71) ? colorMaca : false;
    }

    if (!novoSquares[3][1] || novoSquares[3][1] === colorMaca) {
      novoSquares[3][1] = (squares[2][1] && touchY >= boardY + 213) ? colorMaca : false;
    }

    if (!novoSquares[2][2] || novoSquares[2][2] === colorMaca) {
      novoSquares[2][2] = (squares[2][1] && touchX >= boardX + 142) ? colorMaca : false;
    }

    if (!novoSquares[2][3] || novoSquares[2][3] === colorMaca) {
      novoSquares[2][3] = (squares[2][2] && touchX >= boardX + 213) ? colorMaca : false;
    }

    if (!novoSquares[3][2] || novoSquares[3][2] === colorMaca) {
      novoSquares[3][2] = (squares[2][2] && touchY >= boardY + 213) ? colorMaca : false;
    }

    if (!novoSquares[1][3] || novoSquares[1][3] === colorMaca) {
      novoSquares[1][3] = (squares[2][3] && touchY <= boardY + 142) ? colorMaca : false;
    }

    if (!novoSquares[0][3] || novoSquares[0][3] === colorMaca) {
      novoSquares[0][3] = (squares[1][3] && touchY <= boardY + 71) ? colorMaca : false;
    }

    

    squares[0][3] ? setMacaComplete(true) : setMacaComplete(false);

    setSquares(novoSquares);
  };

  const handleTouchEndMaca = () => {
    if (!macaComplete) {
      const novoSquares = [...squares];

      novoSquares[2][1] = (squares[2][1] === colorMaca) ? false : squares[2][1];
      novoSquares[2][0] = (squares[2][0] === colorMaca) ? false : squares[2][0];
      novoSquares[1][0] = (squares[1][0] === colorMaca) ? false : squares[1][0];
      novoSquares[3][0] = (squares[3][0] === colorMaca) ? false : squares[3][0];
      novoSquares[0][0] = (squares[0][0] === colorMaca) ? false : squares[0][0];
      novoSquares[3][1] = (squares[3][1] === colorMaca) ? false : squares[3][1];
      novoSquares[2][2] = (squares[2][2] === colorMaca) ? false : squares[2][2];
      novoSquares[2][3] = (squares[2][3] === colorMaca) ? false : squares[2][3];
      novoSquares[3][2] = (squares[3][2] === colorMaca) ? false : squares[3][2];
      novoSquares[1][3] = (squares[1][3] === colorMaca) ? false : squares[1][3];
      novoSquares[0][3] = (squares[0][3] === colorMaca) ? false : squares[0][3];

      setSquares(novoSquares);
    }
  };

  // Handle Maca Complete
  const handleTouchStartBanana = () => {
    const novoSquares = [...squares];
    novoSquares[1][1] = colorBanana;
    setSquares(novoSquares);
  };

  const handleTouchMoveBanana = (event) => {
    const novoSquares = [...squares];

    const touchY = event.touches[0].clientY;
    const touchX = event.touches[0].clientX;

    if (!novoSquares[1][2] || novoSquares[1][2] === colorBanana) {
      novoSquares[1][2] = (squares[1][1] && touchX >= boardX + 71) ? colorBanana : false;
    }

    if (!novoSquares[1][3] || novoSquares[1][3] === colorBanana) {
      novoSquares[1][3] = (squares[1][2] && touchX >= boardX + 213) ? colorBanana : false;
    }

    if (!novoSquares[0][2] || novoSquares[0][2] === colorBanana) {
      novoSquares[0][2] = (squares[1][2] && touchY <= boardY + 71) ? colorBanana : false;
    }

    if (!novoSquares[2][3] || novoSquares[2][3] === colorBanana) {
      novoSquares[2][3] = (squares[1][3] && touchY >= boardY + 142) ? colorBanana : false;
    }

    if (!novoSquares[2][2] || novoSquares[2][2] === colorBanana) {
      novoSquares[2][2] = (squares[1][2] && touchY >= boardY + 142) || (squares[2][3] && touchX <= boardX + 213) ? colorBanana : false;
    }

    squares[0][2] ? setBananaComplete(true) : setBananaComplete(false);

    setSquares(novoSquares);
  };

  const handleTouchEndBanana = () => {
    if (!BananaComplete) {
      const novoSquares = [...squares];

      novoSquares[0][2] = (squares[0][2] === colorBanana) ? false : squares[0][2];
      novoSquares[1][2] = (squares[1][2] === colorBanana) ? false : squares[1][2];
      novoSquares[1][3] = (squares[1][3] === colorBanana) ? false : squares[1][3];
      novoSquares[1][1] = (squares[1][1] === colorBanana) ? false : squares[1][1];
      novoSquares[2][3] = (squares[2][3] === colorBanana) ? false : squares[2][3];
      novoSquares[2][2] = (squares[2][2] === colorBanana) ? false : squares[2][2];

      setSquares(novoSquares);
    }
  };

  // Handle Uva Complete
  const handleTouchStartUva = () => {
    const novoSquares = [...squares];
    novoSquares[3][3] = colorUva;
    setSquares(novoSquares);
  };

  const handleTouchMoveUva = (event) => {
    const novoSquares = [...squares];

    const touchY = event.touches[0].clientY;
    const touchX = event.touches[0].clientX;

    if (squares[0][0] && squares[0][0] === colorUva) {
      if (!novoSquares[0][1] || novoSquares[0][1] === colorUva) {
        novoSquares[0][1] = (squares[0][0] && touchX >= boardX + 71) ? colorUva : false;
      }
    }
    else {
      if (!novoSquares[3][2] || novoSquares[3][2] === colorUva) {
        novoSquares[3][2] = (squares[3][3] && touchX <= boardX + 213) ? colorUva : false;
      }

      if (!novoSquares[3][1] || novoSquares[3][1] === colorUva) {
        novoSquares[3][1] = (squares[3][2] && touchX <= boardX + 142) ? colorUva : false;
      }

      if (!novoSquares[3][0] || novoSquares[3][0] === colorUva) {
        novoSquares[3][0] = (squares[3][1] && touchX <= boardX + 71) ? colorUva : false;
      }

      if (!novoSquares[2][0] || novoSquares[2][0] === colorUva) {
        novoSquares[2][0] = (squares[3][0] && touchY <= boardY + 213) ? colorUva : false;
      }

      if (!novoSquares[1][0] || novoSquares[1][0] === colorUva) {
        novoSquares[1][0] = (squares[2][0] && touchY <= boardY + 142) ? colorUva : false;
      }

      if (!novoSquares[0][0] || novoSquares[0][0] === colorUva) {
        novoSquares[0][0] = (squares[1][0] && touchY <= boardY + 71) ? colorUva : false;
      }
    }

    squares[0][1] ? setUvaComplete(true) : setUvaComplete(false);

    setSquares(novoSquares);
  };

  const handleTouchEndUva = () => {
    if (!uvaComplete) {
      const novoSquares = [...squares];

      novoSquares[0][1] = (squares[0][1] === colorUva) ? false : squares[0][1];
      novoSquares[3][1] = (squares[3][1] === colorUva) ? false : squares[3][1];
      novoSquares[3][2] = (squares[3][2] === colorUva) ? false : squares[3][2];
      novoSquares[3][3] = (squares[3][3] === colorUva) ? false : squares[3][3];
      novoSquares[0][0] = (squares[0][0] === colorUva) ? false : squares[0][0];
      novoSquares[1][0] = (squares[1][0] === colorUva) ? false : squares[1][0];
      novoSquares[2][0] = (squares[2][0] === colorUva) ? false : squares[2][0];
      novoSquares[3][0] = (squares[3][0] === colorUva) ? false : squares[3][0];

      setSquares(novoSquares);
    }
  };

  useEffect(() => {
    if (reset) {
      setMacaComplete(false);
      setBananaComplete(false);
      setUvaComplete(false);
      setSquares([[false, false, false, false], [false, false, false, false], [false, false, false, false], [false, false, false, false]]);
    }
  }, [reset])

  return (
    <div className="m-auto board-size-small">
      <Board id="board" $size={16}>
        <Square $size={'small'} $background={squares[0][0]}></Square>
        <Square $size={'small'} $background={squares[0][1]}>
          <img src={UvaIcon} alt='Uva' />
        </Square>
        <Square $size={'small'} $background={squares[0][2]}>
          <img src={BananaIcon} alt='Banana' />
        </Square>
        <Square $size={'small'} $background={squares[0][3]}>
          <img src={MacaIcon} alt='Maca' />
        </Square>

        <Square $size={'small'} $background={squares[1][0]}></Square>
        <Square $size={'small'}
          $background={squares[1][1]}
          onTouchStart={handleTouchStartBanana}
          onTouchMove={handleTouchMoveBanana}
          onTouchEnd={handleTouchEndBanana}
        >
          <span className='small'>Banana</span>
        </Square>
        <Square $size={'small'} $background={squares[1][2]}></Square>
        <Square $size={'small'} $background={squares[1][3]}></Square>

        <Square $size={'small'} $background={squares[2][0]}></Square>
        <Square $size={'small'} 
          $background={squares[2][1]}
          onTouchStart={handleTouchStartMaca}
          onTouchMove={handleTouchMoveMaca}
          onTouchEnd={handleTouchEndMaca}
        >
          <span className='small'>Maçã</span>
        </Square>
        <Square $size={'small'} $background={squares[2][2]}></Square>
        <Square $size={'small'} $background={squares[2][3]}></Square>

        <Square $size={'small'} $background={squares[3][0]}></Square>
        <Square $size={'small'} $background={squares[3][1]}></Square>
        <Square $size={'small'} $background={squares[3][2]}></Square>
        <Square $size={'small'} 
          $background={squares[3][3]}
          onTouchStart={handleTouchStartUva}
          onTouchMove={handleTouchMoveUva}
          onTouchEnd={handleTouchEndUva}
        >
          <span className='small'>Uva</span>
        </Square>

      </Board>
      {
        macaComplete &&
        BananaComplete &&
        uvaComplete &&
        <div className='h-0'>
          <CompleteMessage size={'big'}>
            <h2>Parabéns, você completou esse fase.</h2>
          </CompleteMessage>
        </div>
      }
    </div>
  )
}