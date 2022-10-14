import React, { useContext, useState } from "react";
import { AppContext } from "../context";
import Avatar from "./Avatar";
import ReplyComp from "./ReplyComp";

const Comment = (props) => {
  const [reply, setReply] = useState(false);
  const [like, setLike] = useState(0);

  return (
    <div className="pl-4">
      <div className=" min-h-[2rem] bg-gray-200 flex items-center p-4 my-4 rounded-md">
        <Avatar />
        <div className="ml-4 w-full">
          <h1>{props.name}</h1>
          <p className="mb-8">{props.comment}</p>

          {reply ? (
            <ReplyComp id={props.id} arr={props.child} />
          ) : (
            // <CommentInput id={props.id} />
            <div className="mt-4 flex justify-between items-center">
              <button
                onClick={() => {
                  setLike((prev) => prev + 1);
                }}
                className="px-4 py-1 rounded-md font-bold uppercase text-white"
                style={{
                  background: like ? "Darkred" : "gray",
                }}
              >
                like <span>{like}</span>
              </button>
              <button
                onClick={() => setReply(true)}
                className="bg-blue-500 px-4 py-1 rounded-md font-bold uppercase text-white"
              >
                reply
              </button>
            </div>
          )}
        </div>
      </div>
      {Array.isArray(props?.child) &&
        props?.child.map((each) => {
          return (
            <React.Fragment key={each.id}>
              <Comment {...each} />
            </React.Fragment>
          );
        })}
    </div>
  );
};

export default Comment;
