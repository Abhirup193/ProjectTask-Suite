import React, { useRef } from "react";

function NewTask({ onAdd }) {
  const newtask = useRef();
  function clickhandle() {
    onAdd(newtask.current.value);
    newtask.current.value = "";
  }
  return (
    <div className="flex items-center gap-4">
      <input
        ref={newtask}
        type="text"
        className="border-2 border-stone-950 w-64 px-2 py-1 rounded-sm"
        placeholder="Add New Task"
        onfocus="Add New Task"
      />
      <button
        className="rounded-xl px-2 py-2 bg-stone-700 text-stone-300 hover:text-stone-100 hover:bg-stone-950"
        onClick={clickhandle}
      >
        Add Task
      </button>
    </div>
  );
}
export default NewTask;
