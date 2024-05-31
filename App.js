import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Views from "./src/Views";

export default function App() {
  return <Views />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
