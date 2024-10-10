import React from "react";
import { Container, TipTitle, InputContainer, Input, TipText } from "./styled";

export default function Tipinput({ started, question, setQuestion }) {
  return (
    <Container>
      <TipTitle>Dica de senha:</TipTitle>
      {!started ? (
        <InputContainer>
          <Input
            placeholder="Dica para a sua dupla"
            value={question}
            onChangeText={(value) => {
              setQuestion(value);
            }}
          />
        </InputContainer>
      ) : (
        <TipText>{question}</TipText>
      )}
    </Container>
  );
}
