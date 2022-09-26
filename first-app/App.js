import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Linking,
  FlatList,
  RefreshControl,
} from "react-native";

export default function App() {
  const listOfNames = [
    "Name1",
    "Name1",
    "Name1",
    "Name1",
    "Name1",
    "Name1",
    "Name1",
    "Name1",
    "Name1",
    "Name1",
  ];
  const [name, setName] = useState("Oscar");
  const [refreshing, setRefreshing] = useState(false);
  const [itemsToDisplay, setItemsToDisplay] = useState(listOfNames);

  const refreshHandler = () => {
    setRefreshing(true);
    setItemsToDisplay((itemsToDisplay) => [...itemsToDisplay, "New Name"]);

    setRefreshing(false);
  };

  const onClickHandler = () => {
    setName("Another name");
  };

  return (
    <View style={styles.body}>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={refreshHandler} />
        }
        data={itemsToDisplay}
        renderItem={({ name }) => <Text style={styles.text}>{name}</Text>}
      />
      <Text>My name is not {name}</Text>
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
  text: {
    margin: 10,
  },
});
