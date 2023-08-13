import React, { useState } from "react";

import { useLocalSearchParams } from "expo-router";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

import { CarCardProps } from "../../components/CarCard/types";
import { Header } from "../../components/Header";

import {
  CarImage,
  CardImageContainer,
  Container,
  Description,
  Type,
  TypeText,
  VideoContainer,
  SectionTitle,
  VideoPlayer,
} from "./styles";

export default function Car() {
  const params = useLocalSearchParams() as unknown as CarCardProps;
  const { name, photo, type, description, video, latitude, longitude } = params;
  const latitudeFormatted = Number(latitude);
  const longitudeFormatted = Number(longitude);

  const [imageCar, setImageCar] = useState(photo);
  const [loadingVideo, setLoadingVideo] = useState(true);

  return (
    <>
      <Header title={name} />
      <Container showsVerticalScrollIndicator={false}>
        <CardImageContainer>
          <Type>
            <TypeText>{type}</TypeText>
          </Type>
          <CarImage
            source={{ uri: imageCar }}
            onError={() =>
              setImageCar(
                "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png",
              )
            }
            resizeMode="contain"
          />
        </CardImageContainer>

        <Description>{description}</Description>

        <SectionTitle>Localização </SectionTitle>

        <MapView
          provider={PROVIDER_GOOGLE}
          style={{
            width: "100%",
            height: 500,
          }}
          initialRegion={{
            latitude: latitudeFormatted,
            longitude: longitudeFormatted,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
          <Marker
            coordinate={{
              latitude: latitudeFormatted,
              longitude: longitudeFormatted,
            }}
          />
        </MapView>

        <VideoContainer>
          {!loadingVideo && <SectionTitle>Video</SectionTitle>}
          <VideoPlayer
            source={{
              uri: video,
              // uri: "https://static.videezy.com/system/resources/previews/000/012/979/original/record_player_011.mp4",
            }}
            repeat
            onLoad={() => {
              setLoadingVideo(false);
            }}
          />
        </VideoContainer>
      </Container>
    </>
  );
}
