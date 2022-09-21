import { useState } from "react";
import { Button, StyleSheet, Text, View, Linking } from "react-native";

export default function App() {
  const [name, setName] = useState("Oscar");

  const onClickHandler = () => {
    setName("Another name");
  };

  return (
    <View style={styles.body}>
      <Text>My name is {name}</Text>
      <Button title="Change name" onPress={onClickHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
