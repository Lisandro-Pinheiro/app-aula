import React, { useState } from "react";
import { View, Text, Button } from "react-native";

interface Props {
  text: string;
}

export default function FunctionComponent(props: Props) {
  const [contador, setContador] = useState(0);

  function increment() {
    setContador(contador + 1);
  }

  return (
    <View>
      <Text>{props.text}</Text>
      <Text>{contador}</Text>
      <Button title="Clique!" onPress={() => { increment(); }} />
    </View>
  );
}
