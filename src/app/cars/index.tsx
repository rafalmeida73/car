import React from "react";

import { useRouter } from "expo-router";
import { Appbar } from "react-native-paper";

import { CarCard } from "../../components/CarCard";
import { Header } from "../../components/Header";

import { Container, List, Separator } from "./styles";

const initialCategories = [
  {
    id: 13381,
    nome: "Maserati Grancabrio",
    tipo: "classicos",
    descricao: "Maserati Grancabrio",
    urlFoto:
      "https://s3-sa-east-1.amazonaws.com/videos.livetouchdev.com.br/esportivos/Maserati_Grancabrio_Sport.png",
    urlVideo:
      "https://s3-sa-east-1.amazonaws.com/videos.livetouchdev.com.br/esportivos/renault_megane.mp4",
    latitude: "-23.564224",
    longitude: "-46.653156",
  },
  {
    id: 13381,
    nome: "Maserati Grancabrio",
    tipo: "classicos",
    descricao: "Maserati Grancabrio",
    urlFoto:
      "https://s3-sa-east-1.amazonaws.com/videos.livetouchdev.com.br/esportivos/Maserati_Grancabrio_Sport.png",
    urlVideo:
      "https://s3-sa-east-1.amazonaws.com/videos.livetouchdev.com.br/esportivos/renault_megane.mp4",
    latitude: "-23.564224",
    longitude: "-46.653156",
  },
  {
    id: 13381,
    nome: "Maserati Grancabrio",
    tipo: "classicos",
    descricao: "Maserati Grancabrio",
    urlFoto:
      "https://s3-sa-east-1.amazonaws.com/videos.livetouchdev.com.br/esportivos/Maserati_Grancabrio_Sport.png",
    urlVideo:
      "https://s3-sa-east-1.amazonaws.com/videos.livetouchdev.com.br/esportivos/renault_megane.mp4",
    latitude: "-23.564224",
    longitude: "-46.653156",
  },
];

export default function Cars() {
  return (
    <>
      <Header
        title="Carros"
        icons={[
          {
            name: "arrow-collapse-right",
            onPress: () => {},
          },
        ]}
      />
      <Container>
        <List
          data={initialCategories}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <CarCard
              name={item.nome}
              photo={item.urlFoto}
              video={item.urlVideo}
              description={item.descricao}
              id={item.id}
              latitude={item.latitude}
              longitude={item.longitude}
              type={item.tipo}
            />
          )}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <Separator />}
        />
      </Container>
    </>
  );
}
