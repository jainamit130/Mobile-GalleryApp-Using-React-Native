import React, { useState } from "react";
import { View } from "react-native";
import Gallery from "./Gallery";
import GalleryView from "./GalleryView";
import { images } from "./images";

export default function App() {
  const [selectedGalleryView, setSelectedGalleryView] = useState(false);
  const [index, setIndex] = useState(0);
  return (
    <View>
      {selectedGalleryView && (
        <Gallery
          selectedGalleryView={selectedGalleryView}
          setSelectedGalleryView={setSelectedGalleryView}
          index={index}
          images={images}
        />
      )}
      {!selectedGalleryView && (
        <GalleryView
          selectedGalleryView={selectedGalleryView}
          setSelectedGalleryView={setSelectedGalleryView}
          setIndex={setIndex}
          images={images}
        />
      )}
    </View>
  );
}
