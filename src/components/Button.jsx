import React from "react";

function Button({ text ,...props}) {
  return (
    <button className="rounded-xl px-2 py-2 bg-stone-700 text-stone-300 hover:text-stone-100 hover:bg-stone-950" {...props}>
      {text}
    </button>
  );
}

export default Button;
