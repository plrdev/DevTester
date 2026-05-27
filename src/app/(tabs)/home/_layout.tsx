import { Stack } from "expo-router";
import { Platform, View } from "react-native";

export default function StackLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Koti",
          headerBackground: () => (
            <View
              style={{
                backgroundColor: Platform.OS === "ios" ? "red" : "blue",
                height: 100,
              }}
            />
          ),
        }}
      />
      <Stack.Screen name="second" options={{ title: "Second Screen" }} />
    </Stack>
  );
}
