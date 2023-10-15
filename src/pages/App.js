import { useState } from "react";

import Level1 from "../components/Level1";
import Level2 from "../components/Level2";
import Level3 from "../components/Level3";
import Level4 from "../components/Level4";
import Level5 from "../components/Level5";

import PlayCircle from "../assets/svgs/PlayCircle.svg";
import ArrowClockwise from "../assets/svgs/ArrowClockwise.svg";
import ArrowLeft from "../assets/svgs/ArrowLeft.svg";
import ArrowRight from "../assets/svgs/ArrowRight.svg";

function App() {
  const [start, setStart] = useState(true);
  const [levels, setLevels] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState(false);

  const [resetLevel, setResetLevel] = useState(false);

  const [level1, setLevel1] = useState(false);
  const [level2, setLevel2] = useState(false);
  const [level3, setLevel3] = useState(false);
  const [level4, setLevel4] = useState(false);
  const [level5, setLevel5] = useState(false);

  // function handleStart() {
  //   setStart(false);
  // }

  function handleShowLevels() {
    setStart(false);
    setLevels(true);
    setSelectedLevel(false);
    setLevel1(false);
    setLevel2(false);
    setLevel3(false);
    setLevel4(false);
    setLevel5(false);
  }

  function handleStartLeve1() {
    setStart(false);
    setLevels(false);
    setSelectedLevel(true);
    setLevel1(true);
    setLevel2(false);
    setLevel3(false);
    setLevel4(false);
    setLevel5(false);
  }

  function handleStartLeve2() {
    setStart(false);
    setLevels(false);
    setSelectedLevel(true);
    setLevel1(false);
    setLevel2(true);
    setLevel3(false);
    setLevel4(false);
    setLevel5(false);
  }

  function handleStartLeve3() {
    setStart(false);
    setLevels(false);
    setSelectedLevel(true);
    setLevel1(false);
    setLevel2(false);
    setLevel3(true);
    setLevel4(false);
    setLevel5(false);
  }

  function handleStartLeve4() {
    setStart(false);
    setLevels(false);
    setSelectedLevel(true);
    setLevel1(false);
    setLevel2(false);
    setLevel3(false);
    setLevel4(true);
    setLevel5(false);
  }

  function handleStartLeve5() {
    setStart(false);
    setLevels(false);
    setSelectedLevel(true);
    setLevel1(false);
    setLevel2(false);
    setLevel3(false);
    setLevel4(false);
    setLevel5(true);
  }

  function handleBackStart() {
    setStart(true);
    setLevels(false);
    setSelectedLevel(false);
    setLevel1(false);
    setLevel2(false);
    setLevel3(false);
    setLevel4(false);
    setLevel5(false);
  }

  function handleBackLevels() {
    setStart(false);
    setLevels(true);
    setSelectedLevel(false);
    setLevel1(false);
    setLevel2(false);
    setLevel3(false);
    setLevel4(false);
    setLevel5(false);
  }

  function handleResetLevel() {
    setResetLevel(true);
    setTimeout(() => {
      setResetLevel(false);
    }, 100);
  }

  function handlePreviousLevel() {
    if (level2) handleStartLeve1(); 
    if (level3) handleStartLeve2(); 
    if (level4) handleStartLeve3(); 
    if (level5) handleStartLeve4(); 
  }

  function handleNextLevel() {
    if (level1) handleStartLeve2(); 
    if (level2) handleStartLeve3(); 
    if (level3) handleStartLeve4(); 
    if (level4) handleStartLeve5(); 
  }


  return (
    <div className="container">
      {
        start &&
        <div className="mt-5">
          <h1 className="text-white my-3">Iniciar</h1>
          <h4 className="text-white fw-normal mb-5">Clique no botão abaixo para iniciar o jogo</h4>
          <button className="p-3 border-radius-100 border-0" onClick={handleShowLevels}>
            <img src={PlayCircle} alt="Play"/>
          </button>
        </div>
      }
      {
        levels &&
        <>
          <h2 className="text-white my-3">Fases</h2>
          <h4 className="text-white fw-normal mb-5">Selecione uma das fases abaixo</h4>
          <div className="d-flex flex-column gap-3">
            <button className="bg-white border-radius-2 py-3 px-3" onClick={handleStartLeve1}>
              <span className="fw-medium text-gray-main">Fase 1</span>
            </button>
            <button className="bg-white border-radius-2 py-3 px-3" onClick={handleStartLeve2}>
              <span className="fw-medium text-gray-main">Fase 2</span>
            </button>
            <button className="bg-white border-radius-2 py-3 px-3" onClick={handleStartLeve3}>
              <span className="fw-medium text-gray-main">Fase 3</span>
            </button>
            <button className="bg-white border-radius-2 py-3 px-3" onClick={handleStartLeve4}>
              <span className="fw-medium text-gray-main">Fase 4</span>
            </button>
            <button className="bg-white border-radius-2 py-3 px-3" onClick={handleStartLeve5}>
              <span className="fw-medium text-gray-main">Fase 5</span>
            </button>
          </div>
          <button className="bg-transparent border-0 border-radius-2 py-3 px-4 mt-5" onClick={handleBackStart}>
            <span className="fw-medium text-white">Voltar</span>
          </button>
        </>
      }
      {
        selectedLevel &&
        <>
          <h2 className="text-white mt-3 mb-5">Ligue o nome da fruta a sua respectiva imagem</h2>

          { level1 && <Level1 reset={resetLevel} /> }
          { level2 && <Level2 reset={resetLevel} /> }
          { level3 && <Level3 reset={resetLevel} /> }
          { level4 && <Level4 reset={resetLevel} /> }
          { level5 && <Level5 reset={resetLevel} /> } 

          <div className="d-flex gap-3 justify-content-center mt-5">
            {/* previous */}
            <button className="bg-white border-0 border-radius-2 py-3 px-4" onClick={handlePreviousLevel} disabled={level1}>
              <img src={ArrowLeft} alt="Previous Level"/>
            </button>

            {/* reset */}
            <button className="bg-white border-0 border-radius-2 py-3 px-4" onClick={handleResetLevel}>
              <img src={ArrowClockwise} alt="Reset"/>
            </button>

            {/* next */}
            <button className="bg-white border-0 border-radius-2 py-3 px-4" onClick={handleNextLevel} disabled={level5}>
              <img src={ArrowRight} alt="Next Level"/>
            </button>
          </div>

          <button className="bg-transparent border-0 border-radius-2 py-3 px-4 mt-5" onClick={handleBackLevels}>
            <span className="fw-medium text-white">Voltar</span>
          </button>

        </>
      }
    </div>
  );
}

export default App;
