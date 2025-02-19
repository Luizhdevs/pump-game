import React from "react";
import { Container, Logo, Rules, SubTitle, Title } from "./styles";
import ButtonComponents from "../../components/Buttons";
import { useNavigation } from "@react-navigation/native";

export default function Start() {
  const navigation = useNavigation();

  const handleNavToPlayAlone = () => {
    navigation.navigate("PlayAlone");
  };
  const handleNavToPlayTogether = () => {
    navigation.navigate("PlayTogether");
  };
  const handleNavToRules = () => {
    navigation.navigate("Rules");
  };

  return (
    <Container>
      <Logo
        source={require("../../assets/logo.png")}
        style={{ resizeMode: "contain" }}
      />
      <Title>Bem-vindo ao {"\n"} Bomb Game</Title>
      <SubTitle>Escolha um modo de Jogo.</SubTitle>
      <ButtonComponents
        buttonText={"Jogar Solo"}
        handlePress={handleNavToPlayAlone}
      />
      <ButtonComponents
        buttonText={"Jogar Em Dupla"}
        handlePress={handleNavToPlayTogether}
      />
      <Rules onPress={handleNavToRules}>Ver as Regras do Jogo</Rules>
    </Container>
  );
}
