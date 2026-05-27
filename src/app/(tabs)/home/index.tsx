import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function FirstScreen() {
  return (
    <View style={styles.container}>
      <Text>First Screen</Text>
      <Link href="/home/second" style={styles.link}>
        Go to Second Screen
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    marginTop: 10,
    color: "blue",
    textDecorationLine: "underline",
  },
});
