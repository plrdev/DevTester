import { Stack } from "expo-router";
import { Platform, View } from "react-native";

export default function StackLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Profiili",
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
    </Stack>
  );
}
