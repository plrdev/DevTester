import { Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function KolmasScreen() {
  const backendValue = "123";
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{ title: backendValue, headerBackTitle: "Takaisin" }}
      />
      <Text style={styles.text}>Alasivu profiilista</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
