import React from "react";
import { BombMessage, Container, ScrollContainer, Title } from "./styled";
import { useNavigation } from "@react-navigation/native";

import InputTimer from "../../components/PlayToGether/InputTimer";
import Tipinput from "../../components/PlayToGether/TipInput";
import PasswordInput from "../../components/PasswordInput";
import ButtonComponents from "../../components/Buttons";

export default function PlayTogether() {
  const navigation = useNavigation();
  function handleNavToStart() {
    navigation.navigate("Start");
  }
  function handleStartGame() {
    console.log("O jogo começou");
  }
  return (
    <ScrollContainer>
      <Container>
        <Title>Bomb Game Dupla</Title>
        <InputTimer />
        <BombMessage>Mensagem de erro Temporaria</BombMessage>
        <Tipinput />
        <PasswordInput />
        <ButtonComponents buttonText="Iniciar" handlePress={handleStartGame} />
        <ButtonComponents
          buttonText="Página Inicial"
          handlePress={handleNavToStart}
        />
      </Container>
    </ScrollContainer>
  );
}
