import React, { useState, createContext, useEffect } from "react";

export const AppContext = createContext();

function getInitialState() {
  const comments = localStorage.getItem("comments");
  return comments ? JSON.parse(comments) : [];
}

const AppProvider = (props) => {
  const [comments, setComments] = useState(getInitialState);
  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);
  return (
    <AppContext.Provider value={{ comments, setComments }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
