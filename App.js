import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { getInHouseNames } from "./api";
import { useEffect, useState } from "react";
import { Link } from "expo-router";



export default function App() {
  const [peopleInHouse, setPeopleInHouse] = useState([]);


  // useEffect(()=>{
  //   setPeopleInHouse(["Calum", "Bob", "Jim"]);
  // }, [peopleInHouse])

  return (
    <View style={styles.container}>
      <Link href="widget"></Link>
      <View >
        <Text style={styles.title}>Who is in the house?</Text>
      </View>
        <View style={styles.list}>
          {TESTPeopleInArray.map((person) => {
            return (
              <View>
                <Text style={styles.item}>{person}</Text>
              </View>
            );
          })}
        </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#565656",
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    padding: 20,
    fontSize: 50,
    marginTop: 5,
    
  },
  list: {
    alignItems: "center",
    backgroundColor: "#b2ffa9",
    borderWidth: 1,
    borderRadius: 150,
    padding: 50,
  },
  title: {
    color: "white",
    fontSize: 25,
    marginBottom: 50,
  }
});
