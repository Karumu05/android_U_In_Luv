import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Page() {
  const TESTPeopleInArray = ["calum", "Nigel", "Declan", "Sue"];

  return (
    <View style={styles.container}>
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
