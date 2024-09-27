import React from "react";
import { Container, Logo, Rules, SubTitle, Title } from "./styles";
import ButtonComponents from "../../components/Buttons";

export default function Start() {
const handleNavToPlayAlone = () => {
  console.log("Teste de play alone");
}
const handleNavToPlayTogether = () => {
  console.log("Teste de play Together");
}
const handleNavToRules = () => {
  console.log("Teste rotas")
}

return ( 
  <Container>
    <Logo 
      source={require("../../assets/logoDark.png")} 
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
  )
}