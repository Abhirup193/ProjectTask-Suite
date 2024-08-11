import React, { useState } from "react";
import NewTask from "./NewTask";

function Task() {
  const [tasks, settasks] = useState([]);
  function addTask(task) {
    settasks((prevtask) => {
      return [...prevtask, task];
    });
  }
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAdd={addTask} />
      {tasks.length === 0 ? (
        <p className="text-stone-800 my-4">
          This project does not have any Task...
        </p>
      ) : (
        <ol>
          {tasks.map((task) => {
            return (
              <div>
                <li className="text-stone-950 font-bold">{task}</li>
              </div>
            );
          })}
        </ol>
      )}
    </section>
  );
}
export default Task;
