import React, { useState } from "react";
import { View, StyleSheet, FlatList, Alert } from "react-native";
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import AddItem from "./components/AddItem";
export default function App() {
  const [items, setItems] = useState([
    { id: Math.floor(Math.random() * 100000000), text: "Milk" },
    { id: Math.floor(Math.random() * 100000000), text: "Eggs" },
    { id: Math.floor(Math.random() * 100000000), text: "Bread" },
    { id: Math.floor(Math.random() * 100000000), text: "Juice" },
  ]);
  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id != id);
    });
  };
  const addItem = (text) => {
    if (!text) {
      Alert.alert("Error", "Please enter an item", [{ text: "Ok" }]);
      // error 계속 떴는데 보니까 세 번째 params는 대괄호로 감싸줘야됨
    } else {
      setItems((prevItems) => {
        return [
          { id: Math.floor(Math.random() * 100000000), text },
          ...prevItems,
        ];
      });
    }
  };
  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
