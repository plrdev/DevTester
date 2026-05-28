import { Redirect } from "expo-router";

import { createMMKV } from "react-native-mmkv";

export const storage = createMMKV();

export default function Index() {
  return <Redirect href="/home" />;
}
