import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

export default function Ex08() {
  return (
    <ScrollView style={styles.container}>
      {/* Imagem de capa */}
      <Image
        source={{
          uri: "https://img.freepik.com/fotos-premium/sorocaba-sao-paulo-brasil-por-volta-de-agosto-de-2022-monumento-turistico-da-cidade-industrial-de-sorocaba_579344-3223.jpg?w=300",
        }}
        style={styles.capa}
      />

      {/* Foto de perfil sobreposta */}
      <View style={styles.perfilContainer}>
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/men/1.jpg" }}
          style={styles.perfil}
        />
      </View>

      {/* Espaço para compensar a sobreposição */}
      <View style={{ height: 80 }} />

      {/* Nome */}
      <Text style={styles.nome}>João Silva</Text>

      {/* Bio */}
      <Text style={styles.bio}>
        Desenvolvedor apaixonado por tecnologia e inovação. Sempre em busca de aprender mais!
      </Text>

      {/* Informações */}
      <View style={styles.secao}>
        <Text style={styles.secaoTitulo}>Meus Posts</Text>
        <Text style={styles.secaoConteudo}>5 Posts</Text>
      </View>

      <View style={styles.secao}>
        <Text style={styles.secaoTitulo}>Seguidores</Text>
        <Text style={styles.secaoConteudo}>230 Seguidores</Text>
      </View>

      <View style={styles.secao}>
        <Text style={styles.secaoTitulo}>Seguindo</Text>
        <Text style={styles.secaoConteudo}>180 Seguindo</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  capa: {
    width: "100%",
    height: 250,
  },

  perfilContainer: {
    position: "absolute",
    top: 180,
    left: 20,
    borderRadius: 60,
    overflow: "hidden",
  },

  perfil: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: "#fff",
  },

  nome: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 10,
  },

  bio: {
    fontSize: 16,
    color: "#555",
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 20,
  },

  secao: {
    marginHorizontal: 20,
    marginBottom: 20,
  },

  secaoTitulo: {
    fontSize: 18,
    fontWeight: "bold",
  },

  secaoConteudo: {
    fontSize: 16,
    color: "#555",
    marginTop: 5,
  },
});
