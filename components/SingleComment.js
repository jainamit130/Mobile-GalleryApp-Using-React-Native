import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const SingleComment = (props) => {
  const colours = [
    "#E91E63",
    "#C21858",
    "#9C2780",
    "#572780",
    "#272A80",
    "#276880",
    "#57ACDC",
    "#57DCBE",
    "#60C689",
  ];

  const deleteComment = () => {
    let commentCopy = [...props.commentsList];
    commentCopy.splice(props.index, 1);
    props.setCommentsList(commentCopy);
    props.setCommentSection(props.commentsList.length == 1 ? false : true);
    props.setCommentSectionCheck(props.commentsList.length == 1 ? false : true);
  };

  return (
    <View
      style={{
        backgroundColor: colours[props.index % 9],
        padding: 15,
        paddingHorizontal: 20,
        opacity: 0.9,
        borderRadius: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20,
        marginLeft: 9.5,
        height: 100,
        width: 360,
      }}
    >
      <View>
        <Text style={{ color: "white", fontSize: 18 }}>{props.comment}</Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => deleteComment()} style={styles.button}>
          <Text style={styles.buttonText}>x</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FFF",
    padding: 20,
    paddingVertical: 1,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  buttonText: {
    color: "black",
    opacity: 0.7,
    fontWeight: "bold",
    fontSize: 15,
    marginBottom: 5,
  },
});

export default SingleComment;
