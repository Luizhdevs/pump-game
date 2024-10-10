import React, { useState } from "react";
import { BombMessage, Container, ScrollContainer, Title } from "./styled";
import { useNavigation } from "@react-navigation/native";

import InputTimer from "../../components/PlayToGether/InputTimer";
import Tipinput from "../../components/PlayToGether/TipInput";
import InputPassword from "../../components/PlayToGether/InputPassword";
import ButtonComponents from "../../components/Buttons";

import BombService from "../../services/BombApp";

export default function PlayTogether() {
  const navigation = useNavigation();
  const [started, setStarted] = useState(false);
  const [pin, setPin] = useState(["", "", ""]);
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const [message, setMessage] = useState("");

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [intervalId, setIntervalId] = useState();

  function handleNavToStart() {
    navigation.navigate("Start");
  }

  function handleStartBomb() {
    const diffTime = BombService.getDiffTime({ hours, minutes, seconds });

    BombService.startContDown({
      setSeconds,
      setMinutes,
      setHours,
      setStarted,
      diffTime,
      setIntervalId,
      intervalId,
      navigation,
    });
  }

  function handleStartGame() {
    BombService.bombActivationTogether({
      question,
      pin,
      hours,
      minutes,
      seconds,
      setMessage,
      setStarted,
      setPin,
      handleStartBomb,
      setAnswer,
    });
  }

  function handleDisarmBomb() {
    BombService.bombDisarmTogether({
      pin,
      answer,
      setStarted,
      intervalId,
      setPin,
      setAnswer,
      navigation,
    });
  }

  function handleGiveUpGame() {
    BombService.giveUpGame({ intervalId, navigation });
  }

  return (
    <ScrollContainer>
      <Container>
        <Title>Bomb Game Dupla</Title>
        <InputTimer
          hours={hours}
          minutes={minutes}
          seconds={seconds}
          setHours={setHours}
          setMinutes={setMinutes}
          setSeconds={setSeconds}
        />
        {message ? <BombMessage>{message ? message : null}</BombMessage> : null}
        <Tipinput
          started={started}
          question={question}
          setQuestion={setQuestion}
        />
        <InputPassword pin={pin} setPin={setPin} />
        {!started ? (
          <>
            <ButtonComponents
              buttonText="Iniciar"
              handlePress={handleStartGame}
            />
            <ButtonComponents
              buttonText="Página Inicial"
              handlePress={handleNavToStart}
            />
          </>
        ) : (
          <>
            <ButtonComponents
              buttonText="Desarmar"
              handlePress={handleDisarmBomb}
            />
            <ButtonComponents
              buttonText="Desistir"
              handlePress={handleGiveUpGame}
            />
          </>
        )}
      </Container>
    </ScrollContainer>
  );
}
