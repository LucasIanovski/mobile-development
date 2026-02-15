import React from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";

// Definindo o tipo para Post
type Post = {
  id: string;
  userName: string;
  userImage: string;
  postImage: string;
  description: string;
};

// Array de Posts com dados de exemplo
const posts: Post[] = [
  {
    id: "1",
    userName: "Carlos Almeida",
    userImage: "https://randomuser.me/api/portraits/men/2.jpg",
    postImage: "https://www.w3schools.com/w3images/lights.jpg",
    description: "Aproveitando o fim de semana com a família!",
  },
  {
    id: "2",
    userName: "Maria Oliveira",
    userImage: "https://randomuser.me/api/portraits/women/2.jpg",
    postImage: "https://www.w3schools.com/w3images/fjords.jpg",
    description: "Uma tarde incrível em um lugar maravilhoso!",
  },
  {
    id: "3",
    userName: "Lucas Pereira",
    userImage: "https://randomuser.me/api/portraits/men/3.jpg",
    postImage: "https://www.w3schools.com/w3images/forest.jpg",
    description: "Conectando-se com a natureza. Muito bom!",
  },
];

export default function Ex09() {
  // Função para renderizar cada post
  const renderPost = ({ item }: { item: Post }) => (
    <View style={styles.postContainer}>
      {/* Foto do Usuário */}
      <View style={styles.userInfo}>
        <Image source={{ uri: item.userImage }} style={styles.userImage} />
        <Text style={styles.userName}>{item.userName}</Text>
      </View>

      {/* Imagem do Post */}
      <Image source={{ uri: item.postImage }} style={styles.postImage} />

      {/* Descrição do Post */}
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  return (
    <FlatList
      data={posts}
      renderItem={renderPost}
      keyExtractor={(item) => item.id}
    />
  );
}

const styles = StyleSheet.create({
  postContainer: {
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  postImage: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: "#555",
  },
});
