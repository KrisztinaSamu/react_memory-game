import "./styles.css";
import StartModal from "./components/StartModal/StartModal";
import Header from "./components/Header/Header";
import Finish from "./components/Finish/Finish";
import { useEffect, useState } from "react";
import cardsArray from "./img/index";
import "./components/Card/Card.css";
import GameTime from "./components/GameTime/GameTime";
import DateAndTime from "./components/DateAndTime/DateAndTime";
import Footer from "./components/Footer/Footer";
import GameBoard from "./components/GameBoard/GameBoard";

export default function App() {
  // Fisher-Yates shuffle
  function swap(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  // Shuffling a deck of cards
  function shuffleCards(array) {
    const length = array.length;
    for (let i = length; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * i);
      const currentIndex = i - 1;
      swap(array, currentIndex, randomIndex);
    }
    return array;
  }

  const [startModal, setStartModal] = useState(true);
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [cards, setCards] = useState(
    shuffleCards(cardsArray.concat(cardsArray))
  );
  const [openCard, setOpenCard] = useState([]);
  const [matched, setMatched] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentTime, setCurrentTime] = useState(null);

  // Game start
  const gameStart = () => {
    setShowModal(false);
    setTimer(0);
    setOpenCard([]);
    setMatched([]);
    setCards(shuffleCards(cardsArray.concat(cardsArray)));
    setIsActive(true);
  };

  const handleGameStart = () => {
    setStartModal(false);
    gameStart();
  };

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setTimer((timer) => timer + 1);
      }, 1000);
    } else if (!isActive && timer !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, timer]);

  // Card flip
  const handleFlip = (index) => {
    setOpenCard((opened) => {
      if (opened.length === 0) {
        return [index];
      } else if (opened.length === 1 && opened[0] !== index) {
        return [opened[0], index];
      } else {
        return opened;
      }
    });
  };

  // The flipped card's id get in openCard, and
  // if there are two ID's in the opencard,
  // it will compare them to each other.
  useEffect(() => {
    const firstmatch = cards[openCard[0]];
    const secondmatch = cards[openCard[1]];
    if (openCard < 2) return;

    if (secondmatch && firstmatch.id === secondmatch.id) {
      setMatched((matched) => [...matched, firstmatch.id]);
    }

    if (openCard.length === 2) {
      setTimeout(() => {
        setOpenCard(() => []);
      }, 1000);
    }
  }, [openCard, cards]);

  // At the end of the game, you pass the playing time to CurrentTime.
  const callbackFunction = (formatTime) => {
    setCurrentTime(formatTime);
  };

  // Checks the end of the game
  useEffect(() => {
    const checkCompletion = () => {
      if (matched.length === cardsArray.length) {
        setShowModal(true);
        callbackFunction();
      }
    };
    checkCompletion();
  }, [matched]);

  useEffect(() => {
    return () => {
      if (Boolean(showModal) === true) {
        setIsActive(false);
      }
    };
  }, [timer, showModal]);

  // Game restart
  const handleReStart = () => {
    setShowModal(false);
    gameStart();
  };

  return (
    <div className="App">
      <StartModal startModal={startModal} handleGameStart={handleGameStart} />
      <Header
        className="header"
        title="Memory Game"
        time={
          <GameTime
            timer={timer}
            showModal={showModal}
            parentCallback={callbackFunction}
            reStart={gameStart}
          />
        }
        date={<DateAndTime />}
      />

      <GameBoard
        cards={cards}
        openCard={openCard}
        handleFlip={handleFlip}
        matched={matched}
        isActive={isActive}
      />

      <Finish
        showModal={showModal}
        currentTime={currentTime}
        handleReStart={handleReStart}
      />
      <Footer />
    </div>
  );
}
