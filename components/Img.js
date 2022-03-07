import React from "react";
import { View, StyleSheet, Button } from "react-native";
const Img = ({ like, handleLikes, showComment, commentsCount }) => {
  return (
    <View style={{ flexDirection: "row", right: 95, top: 400 }}>
      <View>
        <Button
          title={"Comments : " + commentsCount}
          style={styles.button}
          onPress={showComment}
        />
      </View>
      <View style={{ left: 20 }}>
        <Button
          title={like ? "Liked" : "Like"}
          color={"#2196F3"}
          onPress={handleLikes}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {},
  comments: {
    color: "black",
    opacity: 0.5,
    fontWeight: "bold",
    fontSize: 15,
  },
});

export default Img;
