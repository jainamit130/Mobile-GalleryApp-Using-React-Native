import React from "react";
import { useBackHandler } from "@react-native-community/hooks";
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Alert,
  TouchableOpacity,
  BackHandler,
} from "react-native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

const windowHeight = Dimensions.get("window").height;

export default function GalleryView({
  setSelectedGalleryView,
  setIndex,
  images,
}) {
  function backhandler() {
    Alert.alert(
      " Exit From App ",
      " Do you want to exit From App ?",
      [
        { text: "Yes", onPress: () => BackHandler.exitApp() },
        { text: "No", onPress: () => null },
      ],
      { cancelable: false }
    );
    return true;
  }
  useBackHandler(backhandler);

  return (
    <ScrollView keyboardShouldPersistTaps="always">
      <View style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {images.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={1}
            onPress={() => {
              setSelectedGalleryView(true);
              setIndex(index);
            }}
          >
            <Image
              source={item.uri}
              style={{
                width: windowWidth / 3 - 6,
                height: windowHeight / 3,
                borderRadius: 10,
                margin: 2,
              }}
            />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
