import { countAtom } from "@/countAtom";
import { Link } from "expo-router";
import { useAtom } from "jotai";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function FirstScreen() {
  const [count, setCount] = useAtom(countAtom);
  return (
    <View style={styles.container}>
      <Text>First Screen</Text>
      <Text>Count: {count}</Text>
      <TouchableOpacity onPress={() => setCount(count - 1)}>
        <Text>Decrement</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setCount(count + 1)}>
        <Text>Increment</Text>
      </TouchableOpacity>
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
