import React from "react";
import { Container, Logo, SucessImg, Title } from "./styled";
import { useNavigation } from "@react-navigation/native";

import logoImg from "../../assets/logo.png";
import sucessImg from "../../assets/bomba_cortada_matrix.png";
import ButtonComponents from "../../components/Buttons";

export default function Disarmed() {
  const navigation = useNavigation();

  function handleNavToStart() {
    navigation.navigate("Start");
  }

  return (
    <Container>
      <Logo source={logoImg} style={{ resizeMode: "contain" }} />
      <Title>Parabéns!!! {"\n"} Você desarmou</Title>
      <SucessImg source={sucessImg} style={{ resizeMode: "contain" }} />

      <ButtonComponents
        buttonText="Página Inicial"
        handlePress={handleNavToStart}
      />
    </Container>
  );
}
