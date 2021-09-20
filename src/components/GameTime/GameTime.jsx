import { useEffect } from "react";
import ButtonC from "../Button/Button";
import styled from "styled-components";

const TimerWrapper = styled.div``;
const TimerRow = styled.div``;
const ButtonRow = styled.div``;
const Time = styled.p`
  margin: 0 0.25rem;
  font-weight: 900;
`;

export default function GameTime({
  timer,
  reStart,
  showModal,
  parentCallback,
}) {
  const formatTime = () => {
    const getSeconds = `0${timer % 60}s`.slice(-3);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}m`.slice(-3);

    return `${getMinutes} : ${getSeconds}`;
  };

  const sendTimeData = () => {
    parentCallback(formatTime());
  };

  useEffect(() => {
    return () => {
      if (Boolean(showModal) === true) {
        sendTimeData();
      }
    };
  }, [timer, showModal]);

  return (
    <TimerWrapper className="timer-wrapper">
      <TimerRow>
        <Time>Time:</Time>
        <Time>{formatTime()}</Time>
      </TimerRow>
      <ButtonRow>
        <ButtonC name="Restart" reStart={reStart} />
      </ButtonRow>
    </TimerWrapper>
  );
}
