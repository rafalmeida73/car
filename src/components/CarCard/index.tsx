import React, { useState } from "react";

import { useRouter } from "expo-router";

import { CarCardProps } from "./types";

import { Container, CarImage, Title } from "./styles";

export const CarCard: React.FC<CarCardProps> = ({
  name,
  photo,
  description,
  id,
  latitude,
  longitude,
  type,
  video,
}) => {
  const { push } = useRouter();

  const [imageCar, setImageCar] = useState(photo);

  const imageError =
    "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png";

  const handlePress = () => {
    push({
      pathname: `/car`,
      params: {
        name,
        photo: imageCar,
        description,
        id,
        latitude,
        longitude,
        type,
        video,
      },
    });
  };

  return (
    <Container onPress={() => handlePress()}>
      <CarImage
        source={{ uri: imageCar || imageError }}
        onError={() => setImageCar(imageError)}
        resizeMode="contain"
      />
      <Title>{name}</Title>
    </Container>
  );
};
