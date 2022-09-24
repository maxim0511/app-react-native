import axios from "axios";
import { View } from "react-native";
import styled from "styled-components/native";
import { useQuery } from "react-query";
import { CustomLoader } from "../components";
import { useEffect } from "react";

const PostImage = styled.Image`
  border-radius: 10px;
  width: 100%;
  height: 250px;
  margin-bottom: 20px;
`;
const PostText = styled.Text`
  font-size: 18px;
  line-height: 24px;
`;

export const FullPost = ({ route, navigation }) => {
  const { id, title } = route.params;
  const { data, isLoading } = useQuery(
    "post",
    () =>
      axios.get(
        "https://632eed68b56bd6ac45a7584b.mockapi.io/api/posts/posts/" + id
      ),
    {
      refetchOnWindowFocus: false,
      onError: () => {
        Alert.alert("Ошибка", "Не удалось получить посты");
      },
    }
  );
  useEffect(() => {
    navigation.setOptions({
      title,
    });
  }, []);

  if (isLoading) return <CustomLoader />;

  return (
    <View style={{ padding: 20 }}>
      <PostImage source={{ uri: data.data.imageUrl }} />
      <PostText>{data.data.text}</PostText>
    </View>
  );
};
