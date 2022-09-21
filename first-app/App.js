import { useState } from "react";
import { Button, StyleSheet, Text, View, Linking } from "react-native";

export default function App() {
  const [name, setName] = useState("Oscar");

  return (
    <View style={styles.body}>
      <Text>Testing react native</Text>
      <Button
        title="Link to page"
        onPress={() => {
          Linking.openURL("https://www.dn.se/");
        }}
      />
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
