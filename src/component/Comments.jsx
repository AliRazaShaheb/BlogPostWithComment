import React, { useContext, useState } from "react";
import Avatar from "./Avatar";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import { AppContext } from "../context";

const Comments = () => {
  const { comments, setComments } = useContext(AppContext);

  return (
    <div className="flex flex-col bg-gray-100  min-h-[100px] p-4 rounded-md">
      <div className="font-bold text-lg mb-4">
        <span>Comments</span>
      </div>
      <CommentInput />/
      <div>
        {comments &&
          comments.map((each) => {
            return (
              <React.Fragment key={each.id}>
                <Comment {...each} />
              </React.Fragment>
            );
          })}
      </div>
    </div>
  );
};

export default Comments;
