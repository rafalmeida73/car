import React, { useEffect } from "react";

import { useRouter } from "expo-router";

import { CarCard } from "../../components/CarCard";
import { Header } from "../../components/Header";
import { useCars } from "../../logic/useCars";

import { Container, List, Separator } from "./styles";

export default function Cars() {
  const { logout, cars, loadCars } = useCars();
  const router = useRouter();

  useEffect(() => {
    loadCars();
  }, [loadCars]);

  return (
    <>
      <Header
        title="Carros"
        icons={[
          {
            name: "arrow-collapse-right",
            onPress: async () => {
              await logout();
              router.push("/");
            },
          },
        ]}
      />
      <Container>
        <List
          data={cars}
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
          ItemSeparatorComponent={() => (
            <Separator testID="Cars-FlatList-Separator" />
          )}
          testID="Cars-FlatList"
        />
      </Container>
    </>
  );
}
