import React, { useEffect, useState } from "react";
import {
  Container,
  Timer,
  Title,
  TextTimer,
  TipContainer,
  TipTitle,
  TipText,
} from "./styled";
import { ImageBackground } from "react-native";
import bombImg from "../../assets/bomba.png";
import PasswordInput from "../../components/PasswordInput";
import ButtonComponents from "../../components/Buttons";
import { useNavigation } from "@react-navigation/native";

import BombService from "../../services/BombApp";
import api from "../../services/api/api";

export default function PlayAlone() {
  const navigation = useNavigation();
  const [started, setStarted] = useState(false);
  const [pin, setPin] = useState(["", "", ""]);
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("03");
  const [seconds, setSeconds] = useState("00");
  // console.log({ pin });
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [intervalId, setIntervalId] = useState();

  function handleStartGame() {
    BombService.bombStartGame({ setStarted, hours, minutes, seconds });
  }

  function handleDisarmBomb() {
    BombService.disarmBomb({
      setStarted,
      answer,
      navigation,
      pin,
      setPin,
      intervalId,
    });
  }

  function handleGiveUp() {
    BombService.giveUpGame({ intervalId, navigation });
  }

  async function fetchQuestion() {
    const randomNumber = Math.floor(Math.random() * 6 + 1);

    const { data } = await api.get(`questions/${randomNumber}`);

    setQuestion(data?.pergunta);
    setAnswer(data?.resp);
  }

  useEffect(() => {
    fetchQuestion();
  }, []);

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

  function handleNavToStart() {
    navigation.navigate("Start");
  }

  useEffect(() => {
    if (started) {
      handleStartBomb();
    }
  }, [started]);

  return (
    <Container>
      <Title>Bomb Game Solo</Title>
      <ImageBackground
        source={bombImg}
        resizeMode="cover"
        style={{
          minHeight: 130,
          marginTop: 50,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Timer>
          <TextTimer>
            {hours} : {minutes} : {seconds}
          </TextTimer>
        </Timer>
      </ImageBackground>
      {!started ? null : (
        <TipContainer>
          <TipTitle>Sua Dica:</TipTitle>
          <TipText>{question}</TipText>
          <TipText>{answer}</TipText>
        </TipContainer>
      )}

      <PasswordInput pin={pin} setPin={setPin} started={started} />
      {!started ? (
        <>
          <ButtonComponents
            buttonText="Iniciar"
            handlePress={handleStartGame}
          />
          <ButtonComponents
            buttonText="Página inicial"
            handlePress={handleNavToStart}
          />
        </>
      ) : (
        <>
          <ButtonComponents
            buttonText="Desarmar"
            handlePress={handleDisarmBomb}
          />
          <ButtonComponents buttonText="Desistir" handlePress={handleGiveUp} />
        </>
      )}
    </Container>
  );
}
