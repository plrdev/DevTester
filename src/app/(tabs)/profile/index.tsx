import { countAtom } from "@/countAtom";
import { Link } from "expo-router";
import { useAtom } from "jotai";
import { StyleSheet, Text, View } from "react-native";

export default function ProfileScreen() {
  const [count] = useAtom(countAtom);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile</Text>
      <Text>Home count: {count}</Text>
      <Link href="/profile/kolmas" style={styles.link}>
        <Text>Go to Kolmas Screen</Text>
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
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    marginTop: 10,
    color: "blue",
    textDecorationLine: "underline",
  },
});
