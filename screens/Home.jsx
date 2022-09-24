import axios from "axios";
import {
  Alert,
  FlatList,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import { useQuery } from "react-query";
import { CustomLoader, Post } from "../components";

export const Home = ({ navigation }) => {
  const { data, isLoading, refetch } = useQuery(
    "posts",
    () =>
      axios.get("https://632eed68b56bd6ac45a7584b.mockapi.io/api/posts/posts"),
    {
      refetchOnWindowFocus: false,
      onError: () => {
        Alert.alert("Ошибка", "Не удалось получить посты");
      },
    }
  );
  if (isLoading) return <CustomLoader />;

  return (
    <FlatList
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={refetch} />
      }
      data={data?.data}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("FullPost", {
              id: item.id,
              title: item.title,
            })
          }
        >
          <Post
            title={item.title}
            imageUrl={item.imageUrl}
            createdAt={item.createdAt}
          />
        </TouchableOpacity>
      )}
    />
  );
};
