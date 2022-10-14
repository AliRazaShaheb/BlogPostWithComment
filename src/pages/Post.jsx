import React from "react";
import Article from "../component/Article";
import User from "../component/User";
import Comments from "../component/Comments";

const Post = () => {
  return (
    <div className="flex flex-col justify-center w-full lg:w-[75%]">
      <div className="font-bold text-[3rem]">
        <h1>Lorem ipsum dolor</h1>
      </div>
      {/* <div className="w-full h-[150px] bg-gray-200 mt-[2rem]"></div> */}
      <User />
      <Article />
      <Comments />
    </div>
  );
};

export default Post;
