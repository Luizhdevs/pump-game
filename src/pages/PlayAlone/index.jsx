import React from "react";
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

export default function PlayAlone() {
  const navigation = useNavigation();

  function handleStartGame() {
    console.log("click button");
  }

  function handleNavToStart() {
    navigation.navigate("Start");
  }

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
          <TextTimer>00 : 05 : 00</TextTimer>
        </Timer>
      </ImageBackground>
      <TipContainer>
        <TipTitle>Sua Dica:</TipTitle>
        <TipText>Dica vai estar aqui</TipText>
      </TipContainer>

      <PasswordInput />
      <ButtonComponents buttonText="Iniciar" handlePress={handleStartGame} />
      <ButtonComponents
        buttonText="Página inicial"
        handlePress={handleNavToStart}
      />
    </Container>
  );
}
