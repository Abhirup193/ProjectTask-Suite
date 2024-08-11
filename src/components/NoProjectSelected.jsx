import React from "react";
import noProjectimage from "../assets/no-projects.png";
import Button from "./Button";

function NoProjectSelected({onClickNewProject}) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={noProjectimage}
        alt="An empty task list"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a Project from Your Project Tab
      </p>
      <p className="mt-8">
        <Button onClick={onClickNewProject} text="Create New Project" />
      </p>
    </div>
  );
}

export default NoProjectSelected;
