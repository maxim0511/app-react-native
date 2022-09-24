import { Text, View, ActivityIndicator } from "react-native";

export const CustomLoader = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <ActivityIndicator size={"large"} />
    <Text style={{ marginTop: 12 }}>Загрузка...</Text>
  </View>
);
