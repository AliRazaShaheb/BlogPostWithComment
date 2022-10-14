import React from "react";
import Avatar from "./Avatar";

const User = () => {
  return (
    <div className="flex items-center mt-4 mb-8">
      <Avatar />
      <div className="ml-4">
        <h1 className="font-bold">IM Writer</h1>
        <p className="text-sm">Posted 2 days</p>
      </div>
    </div>
  );
};

export default User;
