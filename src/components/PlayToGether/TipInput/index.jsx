import React from "react";
import { Container, TipTitle, InputContainer, Input } from "./styled";

export default function Tipinput() {
  return (
    <Container>
      <TipTitle>Dica de senha:</TipTitle>
      <InputContainer>
        <Input placeholder="Dica para a sua dupla" />
      </InputContainer>
    </Container>
  );
}
