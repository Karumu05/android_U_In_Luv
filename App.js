import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { getInHouseNames } from "./api";
import { useEffect, useState } from "react";

export default function App() {
  const [peopleInHouse, setPeopleInHouse] = useState([]);

  // useEffect(()=>{
  //   setPeopleInHouse(["Calum", "Bob", "Jim"]);
  // }, [peopleInHouse])
  

  return (
    <View style={styles.container}>
      {/* {peopleInHouse.map((person) => {
        return (
          <View>
            <Text style={styles.item}>{person.name}</Text>
          </View>
        );
      })} */}
      <Text>Hey</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    padding: 20,
    fontSize: 15,
    marginTop: 5,
  }
});
