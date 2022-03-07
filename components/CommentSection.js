import React, { useRef } from "react";
import { View, ScrollView } from "react-native";
import SingleComment from "./SingleComment";

const CommentSection = (props) => {
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

  const scrollViewRef = useRef();

  return (
    <View>
      {props.commentsList.length !== 0 && (
        <View
          style={{
            height: 420,
            width: 370,
            right: -5,
            top: -10,
            backgroundColor: "white",
            opacity: 0.4,
            borderRadius: 20,
            maxHeight: 600,
            position: "absolute",
          }}
        />
      )}
      <View
        style={{
          backgroundColor: "transparent",
          maxHeight: 600,
          justifyContent: "flex-start",
        }}
      >
        <ScrollView
          keyboardShouldPersistTaps="always"
          style={{
            flexGrow: 1,
            maxHeight: 400,
            height: 600,
            width: 360,
            minHeight: "40%",
            backgroundColor: "transparent",
            opacity: 1,
          }}
          ref={scrollViewRef}
          onContentSizeChange={() =>
            scrollViewRef.current.scrollToEnd({ animated: true })
          }
        >
          {props.commentsList.map((comment, index) => {
            return (
              <View
                style={{
                  top: 40,
                  right: 10,
                  paddingBottom: 20,
                }}
              >
                <SingleComment
                  key={comment.uniqueId}
                  comment={comment}
                  commentsList={props.commentsList}
                  setCommentsList={props.setCommentsList}
                  setCommentSection={props.setCommentSection}
                  commentSectionCheck={props.commentSectionCheck}
                  setCommentSectionCheck={props.setCommentSectionCheck}
                  index={index}
                />
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default CommentSection;
