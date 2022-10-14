import { useContext, useState } from "react";
import { AppContext } from "../context";
import { v4 as uuidv4 } from "uuid";

const initialInputState = {
  id: "",
  name: "",
  comment: "",
  child: [],
};

const CommentInput = ({ id }) => {
  const { comments, setComments } = useContext(AppContext);
  const [inputValue, setInputValue] = useState(initialInputState);

  const inputHandler = (e) => {
    setInputValue((prev) => {
      return {
        ...prev,
        id: uuidv4(),
        child: [],
        [e.target.name]: e.target.value,
      };
    });
  };

  const submitComment = () => {
    if (!inputValue.name.trim() || !inputValue.comment.trim()) {
      return;
    }
    setComments((prev) => {
      return [...prev, inputValue];
    });

    setInputValue(initialInputState);
  };
  return (
    <div className="flex flex-col gap-4 w-full text-sm font-normal">
      <input
        type="text"
        name="name"
        placeholder="your name"
        value={inputValue.name}
        onChange={inputHandler}
        className="p-2 rounded-md"
      />
      <textarea
        name="comment"
        placeholder="your thoughts?"
        value={inputValue.comment}
        onChange={inputHandler}
        className="p-2 rounded-md"
      />
      <div className="flex justify-end items-center">
        <button
          onClick={submitComment}
          className="bg-blue-500 py-2 px-4 font-bold text-white rounded-md"
        >
          COMMENT
        </button>
      </div>
    </div>
  );
};

export default CommentInput;
