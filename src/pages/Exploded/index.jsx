import React, { useEffect } from "react";
import { Container, Logo, SucessImg, Title } from "./styled";
import { useNavigation } from "@react-navigation/native";

import logoImg from "../../assets/logo.png";
import sucessImg from "../../assets/bomba_explodiu.png";
import ButtonComponents from "../../components/Buttons";
import { Vibration } from "react-native";

export default function Exploded() {
  const navigation = useNavigation();

  function handleNavToStart() {
    navigation.navigate("Start");
  }

  useEffect(() => {
    Vibration.vibrate(5000);
  }, []);

  return (
    <Container>
      <Logo source={logoImg} style={{ resizeMode: "contain" }} />
      <Title>Você falou, a{"\n"}Bomba explodiu!!!</Title>
      <SucessImg source={sucessImg} style={{ resizeMode: "contain" }} />

      <ButtonComponents
        buttonText="Página Inicial"
        handlePress={handleNavToStart}
      />
    </Container>
  );
}
