import React, { useState } from "react";
import { useBackHandler } from "@react-native-community/hooks";
import {
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
  View,
  ImageBackground,
} from "react-native";
import Swiper from "react-native-swiper";
import Page from "./components/Page";

const { width } = Dimensions.get("window");
const height = (width * 130) / 60;

export default function Gallery({ setSelectedGalleryView, index, images }) {
  const [commentSectionCheck, setCommentSectionCheck] = useState(false);
  const [commentSection, setCommentSection] = useState(false);

  function backhandler() {
    if (!commentSectionCheck) {
      setSelectedGalleryView(false);
    } else {
      setCommentSection(false);
      setCommentSectionCheck(false);
    }
    return true;
  }
  useBackHandler(backhandler);

  return (
    <View style={{ marginTop: 0, width, height }}>
      <Swiper
        loop={false}
        pagingEnabled={true}
        scrollEnabled={!commentSectionCheck}
        index={index}
        keyboardShouldPersistTaps="handled"
      >
        {images.map((item, index) => (
          <View>
            <ImageBackground
              key={index}
              source={item.uri}
              style={{ width, height, resizeMode: "contain" }}
            >
              <ImageBackground
                key={index}
                source={item.uri}
                style={{ width, height, resizeMode: "contain" }}
                blurRadius={commentSectionCheck ? 20 : 0}
              />
              <KeyboardAvoidingView
                behavior={Platform.OS == "android" ? "padding" : "position"}
                style={styles.writeTaskWrapper}
              >
                <Page
                  key={item.uniqueId}
                  index={index}
                  commentSection={commentSection}
                  setCommentSection={setCommentSection}
                  commentSectionCheck={commentSectionCheck}
                  setCommentSectionCheck={setCommentSectionCheck}
                  style={{ width, height }}
                />
              </KeyboardAvoidingView>
            </ImageBackground>
          </View>
        ))}
      </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
  writeTaskWrapper: {
    position: "absolute",
    bottom: 30,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
});
