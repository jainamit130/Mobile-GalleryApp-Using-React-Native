import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Keyboard,
} from "react-native";
import Img from "./Img";
import CommentSection from "./CommentSection";

export default function Page({
  commentSection,
  setCommentSection,
  commentSectionCheck,
  setCommentSectionCheck,
}) {
  const [like, setLike] = useState(false);
  const [comment, setComment] = useState("");
  const [commentsList, setCommentsList] = useState([]);

  let noCommentCheck = commentsList.length ? false : true;

  const commented = () => {
    setCommentSection(!commentSection);
    setCommentSectionCheck(!commentSection);
  };

  const handleComment = () => {
    const commetnWithoutSpaces = comment.trim();
    if (commetnWithoutSpaces || comment == undefined) {
      Keyboard.dismiss();
      setCommentsList([...commentsList, comment]);
      setComment("");
    }
  };

  return (
    <View>
      <TouchableOpacity
        activeOpacity={1}
        onPress={commentSection ? () => commented() : null}
      >
        <View style={{ backgroundColor: "transparent", left: 15 }}>
          {commentSection && (
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                justifyContent: "center",
                top: 400,
                height: 700,
                width: 360,
                backgroundColor: "transparent",
              }}
            ></View>
          )}
          <View style={styles.item}>
            {noCommentCheck && commentSection && (
              <Text
                style={{
                  position: "absolute",
                  backgroundColor: "black",
                  fontSize: 15,
                  color: "white",
                }}
              >
                There is no Comment. Be the first one to Comment
              </Text>
            )}
            <View style={{ bottom: 15 }}>
              <Img
                like={like}
                comment={comment}
                handleLikes={() => setLike(!like)}
                showComment={() => commented()}
                commentsCount={commentsList.length}
              />
            </View>
            <View style={{ flexDirection: "row", top: 400 }}>
              <TextInput
                style={styles.input}
                value={comment}
                placeholder={"Write a Comment"}
                onChangeText={(text) => setComment(text)}
              />
              <TouchableOpacity
                onPress={() => handleComment()}
                style={styles.addWrapper}
              >
                <Text style={styles.addText}>Go</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={!noCommentCheck}
        onPress={
          noCommentCheck && commentSection
            ? () => {
                commented();
              }
            : null
        }
        activeOpacity={1}
        style={{
          position: "absolute",
          flexDirection: "column",
          alignContent: "space-around",
          alignItems: "baseline",
          bottom: 200,
          left: 15,
        }}
      >
        {commentSection && (
          <CommentSection
            key={comment.id}
            commentsList={commentsList}
            setCommentsList={setCommentsList}
            commentSection={commentSection}
            setCommentSection={setCommentSection}
            commentSectionCheck={commentSectionCheck}
            setCommentSectionCheck={setCommentSectionCheck}
          />
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    height: 520,
    top: 15,
    alignItems: "center",
    alignContent: "stretch",
    backgroundColor: "transparent",
    position: "relative",
    zIndex: 0,
  },
  input: {
    paddingVertical: 15,
    width: 300,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: "#FFF",
    borderRadius: 15,
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#2196F3",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
    left: 8,
  },
  addText: { fontSize: 30 },
  button: {
    backgroundColor: "#C21858",
    padding: 10,
    borderRadius: 10,
    marginLeft: 120,
  },
});
