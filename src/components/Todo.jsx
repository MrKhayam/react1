import React from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { removeTodo } from "../features/TodoSlice";

const Todo = ({ todoText, todoId }) => {

    const dispatch = useDispatch();
    const handleClose = () => {
      dispatch(removeTodo(todoId));
    };
  return (
    <>
      <div className="w-full h-12 bg-gray-300 flex items-center p-3 rounded-lg justify-between">
        <h1>{todoText}</h1>
        <IoClose onClick={handleClose} />
      </div>
    </>
  );
};

export default Todo;
