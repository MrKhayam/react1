import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/TodoSlice";

const TodoInput = () => {
  const [inpVal, setInpVal] = useState("");

  const dispatch = useDispatch();


  const handleClick = () => {
    dispatch(addTodo(inpVal));

    setInpVal("");
  }

  const handleEmpty = () => {
    alert("Please Enter Your Todo...")
  }

  return (
    <>
      <div className="w-1/2 mx-auto flex gap-3 h-12 mt-40">
        <input
          value={inpVal}
          onChange={(e) => setInpVal(e.target.value)}
          type="text"
          className="bg-gray-300 w-[80%] h-full p-2 text-lg border-none outline-none rounded-lg"
        />
        <button
        onClick={inpVal ? handleClick : handleEmpty}
          className="w-[20%] h-full bg-gray-300 rounded-lg text-lg active:scale-95 transition-all duration-300">
          Add
        </button>
      </div>
    </>
  );
};

export default TodoInput;
